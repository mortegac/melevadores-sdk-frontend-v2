# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Vite, NODE_ENV=development)
npm run build     # TypeScript compile + Vite production build (auto-bumps patch version via prebuild)
npm run preview   # Preview the production build locally

# Amplify Gen 2 config regeneration (requires Node 20+, profile 'miniswimmer')
npm run generate:config   # Regenerate amplify_outputs.json from the deployed sandbox stack
npm run generate:graphql  # Regenerate src/graphql/ TypeScript files from the Gen 2 schema
```

There are no test or lint scripts configured.

## Architecture

**MiniSwimmer** is a React 18 + TypeScript + Vite PWA for managing a swimming academy (Chilean market). It uses AWS Amplify as its backend (AppSync GraphQL, Cognito auth, S3 storage).

### Key Stack
- **Routing**: React Router v6 with lazy-loaded pages. Routes split into `PrivateRoute` (RBAC) and `PublicRoute`.
- **State**: Redux Toolkit. Each feature domain has its own folder under `src/stores/` with `slice.ts`, `services.ts`, `types.ts`, and GraphQL `queries.ts`/`mutation.ts`. Use typed hooks from `src/stores/hooks.ts` (`useAppSelector`, `useAppDispatch`) — never raw Redux hooks.
- **API**: AWS Amplify `generateClient()` for all GraphQL calls. Services layer in each store's `services.ts` wraps the Amplify client; Redux async thunks call those services.
- **Styling**: Tailwind CSS 3.4 with CSS variables for dynamic color themes (dark mode support). Path alias `@` → `./src`.

### Directory Structure
```
src/
├── components/     # Reusable UI components
├── stores/         # Redux slices by domain (Users, Courses, Enrollments, Students, Locations, Payments, etc.)
├── pages/
│   ├── private/    # 34+ authenticated pages
│   └── public/     # Login, register, password recovery
├── router/         # index.tsx, PrivateRoute.tsx, PublicRoute.tsx, paths.tsx
├── graphql/        # Generated GraphQL queries and mutations
├── utils/          # dateHandler, helper, colors, dictionary utilities
├── themes/         # Layout components
├── types/          # Shared TypeScript types
└── fakers/         # Mock data for development
```

### AWS Configuration (Amplify Gen 2)
Amplify is configured in `src/main.tsx` using `amplify_outputs.json` (at the project root):
```ts
import outputs from '../amplify_outputs.json';
Amplify.configure(outputs);
```
- Backend: `melevadores-sdk-backend-v2` (Amplify Gen 2, separate repo)
- CloudFormation stack: `amplify-backoffice-manu-sandbox-0b1ca78abf`
- AppSync endpoint: `https://xograe6thrd75kdnsq2ggl7flq.appsync-api.us-east-2.amazonaws.com/graphql` — auth mode: `AMAZON_COGNITO_USER_POOLS` (default) + `API_KEY` (public payment flow)
- All GraphQL models use the `v2` prefix (e.g., `v2Users`, `v2Managers`)
- `amplify_outputs.json` is **not a secret** and should be committed
- To regenerate after backend changes, run `npm run generate:config` (requires Node 20)

The only `.env` variable is `VITE_GOOGLE_MAPS_API_KEY` in `.env.local`.

### AWS CLI Profile
**ALWAYS use `--profile melevadores-prod`** for all AWS CLI and Amplify commands in this project. Never use `miniswimmer` or any other profile.

### RBAC
`PrivateRoute.tsx` contains `ProtectedRoute` which checks route permissions by role. Role IDs used in auth state:
- `adminRole` — full access to all routes
- `anfitrion` — attendance, documentation, student profile
- `coach` / `parents` / `academyRole` — `NONE_DASHBOARD` only

Permissions are defined as static arrays (`adminRolePermissions`, `AnfitrionesPermissions`, `NonePermissions`) mapping role → allowed path constants. Path constants live in `src/router/paths.tsx`.

### Redux Store Pattern
Every domain (e.g., Courses) follows this pattern:
1. `queries.ts` / `mutation.ts` — raw GraphQL strings
2. `services.ts` — calls `generateClient().graphql(...)`, returns typed data
3. `slice.ts` — `createAsyncThunk` calls the service; slice handles pending/fulfilled/rejected

**Note:** newer stores (`AppUsers/`, `GmailInbox/`) use `mutations.ts` (plural) instead of `mutation.ts`. This inconsistency exists in the codebase.

Active Redux slices: auth, location, student, course, sessionDetail, sessionType, enrollment, parameters, relationships, academyStudents, emailSend, paymentTransactions, shoppingCartDetails, schedules, shoppingCarts, WP, supportTickets, evaluations, studentEvaluations, product, quickResponse, rolePermissions, gmailInbox, appUsers, plus UI slices (darkMode, colorScheme, sideMenu, theme, compactMenu, pageLoader, breadcrumb).

### WP Store / WhatsApp Integration
The `WP` store and `/api/*` proxy to `https://api.whaticket.com` handle WhatsApp messaging (WhatTicket platform). This is a separate integration from the Amplify backend.
