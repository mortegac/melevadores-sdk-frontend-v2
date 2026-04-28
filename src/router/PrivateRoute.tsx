import { lazy } from "react";
import { Navigate, useLocation } from "react-router-dom";

import FullscreenComponent from './FullscreenComponent';


import { useAppSelector, useAppDispatch } from "@/stores/hooks";
import { selectAuth, getAuthUser} from "@/stores/Users/slice";

import {
    ADMIN_DASHBOARD,
    ANFITRION_DASHBOARD,
    NONE_DASHBOARD,
    PUBLIC,
    PRIVATE,
    ATTENDANCE,
    USERS_ADMIN,
    GMAIL_INBOX_ADMIN,
    CUSTOMERS,
    CUSTOMER_MESSAGES,
    CUSTOMER_ACTIONS,
    RESUME_CLIENT,
    GMAIL_SYNC_LOGS,
  } from "./paths";

  import Layout from "../themes";

  import Attendance from "../pages/private/Attendance";
  const UsersAdmin = lazy(() => import("../pages/private/UsersAdmin"));
  const GmailInbox = lazy(() => import("../pages/private/GmailInbox"));
  const CustomersPage = lazy(() => import("../pages/private/Customers"));
  const CustomerMessagesPage = lazy(() => import("../pages/private/CustomerMessages"));
  const CustomerActionsPage = lazy(() => import("../pages/private/CustomerActions"));
  const GmailSyncLogsPage = lazy(() => import("../pages/private/GmailSyncLogs"));
  const AdminDashboard = lazy(() => import("../pages/private/DashboardAdmin"));
  const NoneDashboard = lazy(() => import("../pages/private/DashboardNone"));
  
  const ResumeClient = lazy(() => import("../pages/private/ResumeClient"));
  

  
  // Definición de permisos por rol
  const adminRolePermissions: string[] = [
    ADMIN_DASHBOARD,
    PRIVATE,
    USERS_ADMIN,
    GMAIL_INBOX_ADMIN,
  ];

  const AnfitrionesPermissions: string[] = [
    ATTENDANCE,
    ANFITRION_DASHBOARD,
  ];

  const NonePermissions: string[] = [
    NONE_DASHBOARD,
  ];

  // Función para obtener permisos según el rol
  const getPermissionsByRole = (roleId: string): string[] => {
    switch (roleId) {
      case "adminRole":
        return adminRolePermissions;
      case "anfitrion":
        return AnfitrionesPermissions;
      case "coach":
      case "parents":
      case "academyRole":
        return NonePermissions;
      default:
        return NonePermissions;
    }
  };

  // Función para obtener el dashboard según el rol
  const getDashboardByRole = (roleId: string): string => {
    switch (roleId) {
      case "adminRole":
        return ADMIN_DASHBOARD;
      case "anfitrion":
        return ANFITRION_DASHBOARD;
      case "coach":
      case "parents":
      case "academyRole":
        return NONE_DASHBOARD;
      default:
        return NONE_DASHBOARD;
    }
  };

  // Componente para proteger rutas basado en permisos
  interface ProtectedRouteProps {
    children: React.ReactElement;
    requiredPath: string;
  }

  const ProtectedRoute = ({ children, requiredPath }: ProtectedRouteProps) => {
    const { usersRolesId } = useAppSelector(selectAuth);
    const location = useLocation();
    
    const userPermissions = getPermissionsByRole(usersRolesId);
    
    // adminRole tiene acceso a todo
    if (usersRolesId === "adminRole") {
      return children;
    }
    
    // Verificar si el usuario tiene permiso para esta ruta
    const hasPermission = userPermissions.includes(requiredPath);
    
    if (!hasPermission) {
      // Redirigir al dashboard correspondiente según el rol
      const dashboardPath = getDashboardByRole(usersRolesId);
      return <Navigate to={dashboardPath} state={{ from: location }} replace />;
    }
    
    return children;
  };
  
  export function PrivateValidation() {
    const { isAuthenticated, usersRolesId } = useAppSelector(selectAuth);
    const location = useLocation();
    
    
    console.log("PrivateValidation>>>", usersRolesId)
      // adminRole
      // admin
      // anfitrion
      // coach
      // parents
      // academyRole
    
    const prevUrl = location.state?.from ?? PUBLIC;
  
    if (!isAuthenticated) {
      return <Navigate to={prevUrl} state={{ from: location }} />;
    }
    
    // Redirigir al dashboard correspondiente si accede a la ruta raíz
    if (location.pathname === PRIVATE) {
      const dashboardPath = getDashboardByRole(usersRolesId);
      return <Navigate to={dashboardPath} replace />;
    }
    
      return (
        <>
           {/* <FullscreenComponent> */}
            <Layout />
           {/* </FullscreenComponent> */}
        </>
      );
  
  }
  
export const privateRoutes = {
    path: PRIVATE,
    element: <PrivateValidation />,
    children: [
        {
          path: ADMIN_DASHBOARD,
          element: (
            <ProtectedRoute requiredPath={ADMIN_DASHBOARD}>
              <AdminDashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: RESUME_CLIENT,
          element: (
            <ProtectedRoute requiredPath={RESUME_CLIENT}>
              <ResumeClient />
            </ProtectedRoute>
          ),
        },
        {
          path: ANFITRION_DASHBOARD,
          element: (
            <ProtectedRoute requiredPath={ATTENDANCE}>
              <Attendance />
            </ProtectedRoute>
          ),
        },
        {
          path: NONE_DASHBOARD,
          element: (
            <ProtectedRoute requiredPath={NONE_DASHBOARD}>
              <NoneDashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: USERS_ADMIN,
          element: (
            <ProtectedRoute requiredPath={USERS_ADMIN}>
              <UsersAdmin />
            </ProtectedRoute>
          ),
        },
        {
          path: GMAIL_INBOX_ADMIN,
          element: (
            <ProtectedRoute requiredPath={GMAIL_INBOX_ADMIN}>
              <GmailInbox />
            </ProtectedRoute>
          ),
        },
        {
          path: CUSTOMERS,
          element: (
            <ProtectedRoute requiredPath={CUSTOMERS}>
              <CustomersPage />
            </ProtectedRoute>
          ),
        },
        {
          path: CUSTOMER_MESSAGES,
          element: (
            <ProtectedRoute requiredPath={CUSTOMER_MESSAGES}>
              <CustomerMessagesPage />
            </ProtectedRoute>
          ),
        },
        {
          path: CUSTOMER_ACTIONS,
          element: (
            <ProtectedRoute requiredPath={CUSTOMER_ACTIONS}>
              <CustomerActionsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: GMAIL_SYNC_LOGS,
          element: (
            <ProtectedRoute requiredPath={GMAIL_SYNC_LOGS}>
              <GmailSyncLogsPage />
            </ProtectedRoute>
          ),
        },
    ],
  };