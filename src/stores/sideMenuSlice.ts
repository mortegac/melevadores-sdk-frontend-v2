import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "@/components/Base/Lucide";
import {
  ATTENDANCE,
  DOCUMENTATION,
  ADMIN_DASHBOARD,
  ANFITRION_DASHBOARD,
  NONE_DASHBOARD,
  USERS_ADMIN,
  GMAIL_INBOX_ADMIN,
  CUSTOMERS,
  CUSTOMER_MESSAGES,
  CUSTOMER_ACTIONS,
} from "@/router/paths";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

// Definición de permisos por rol (misma lógica que en PrivateRoute)
const adminRolePermissions: string[] = [
  ADMIN_DASHBOARD,
  USERS_ADMIN,
  GMAIL_INBOX_ADMIN,
  CUSTOMERS,
  CUSTOMER_MESSAGES,
  CUSTOMER_ACTIONS,
];

const AnfitrionesPermissions: string[] = [
  ATTENDANCE,
  ANFITRION_DASHBOARD,
  DOCUMENTATION
];

const NonePermissions: string[] = [
  NONE_DASHBOARD
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

// Función para filtrar el menú basado en permisos
const filterMenuByPermissions = (
  menu: Array<Menu | string>,
  allowedPaths: string[]
): Array<Menu | string> => {
  const filteredMenu: Array<Menu | string> = [];
  let pendingSeparator: string | null = null;

  menu.forEach((item, index) => {
    if (typeof item === "string") {
      // Es un separador de sección, guardarlo para agregarlo si hay items válidos después
      pendingSeparator = item;
      return;
    }

    // Si es un item de menú con pathname, verificar permisos
    if (item.pathname) {
      // Verificar si el usuario tiene acceso a esta ruta
      const hasAccess = allowedPaths.includes(item.pathname);
      
      if (hasAccess) {
        // Si había un separador pendiente, agregarlo primero
        if (pendingSeparator !== null) {
          filteredMenu.push(pendingSeparator);
          pendingSeparator = null;
        }
        
        // Si tiene submenú, filtrarlo también
        if (item.subMenu) {
          const filteredSubMenu = filterMenuByPermissions(item.subMenu, allowedPaths);
          if (filteredSubMenu.length > 0) {
            filteredMenu.push({
              ...item,
              subMenu: filteredSubMenu.filter((subItem): subItem is Menu => 
                typeof subItem !== "string"
              ) as Menu[]
            });
          }
        } else {
          filteredMenu.push(item);
        }
      }
    } else {
      // Item sin pathname (probablemente un contenedor), agregarlo si tiene submenú válido
      if (item.subMenu) {
        const filteredSubMenu = filterMenuByPermissions(item.subMenu, allowedPaths);
        if (filteredSubMenu.length > 0) {
          // Si había un separador pendiente, agregarlo primero
          if (pendingSeparator !== null) {
            filteredMenu.push(pendingSeparator);
            pendingSeparator = null;
          }
          filteredMenu.push({
            ...item,
            subMenu: filteredSubMenu.filter((subItem): subItem is Menu => 
              typeof subItem !== "string"
            ) as Menu[]
          });
        }
      }
    }
  });

  // Limpiar separadores duplicados o al final
  return filteredMenu.filter((item, index, array) => {
    if (typeof item === "string") {
      // No permitir separadores al inicio o final
      if (index === 0 || index === array.length - 1) {
        return false;
      }
      // No permitir separadores consecutivos
      if (index > 0 && typeof array[index - 1] === "string") {
        return false;
      }
    }
    return true;
  });
};

// Función para obtener el menú según el rol
const getMenuByRole = (roleId: string): Array<Menu | string> => {
  switch (roleId) {
    case "adminRole":
      return [
        "",
        {
          icon: "Home",
          pathname: ADMIN_DASHBOARD,
          title: "Inicio",
        },
        "CRM",
        {
          icon: "UserCheck",
          pathname: CUSTOMERS,
          title: "Clientes",
        },
        {
          icon: "Mail",
          pathname: GMAIL_INBOX_ADMIN,
          title: "Mensajes",
        },
        {
          icon: "ClipboardList",
          pathname: CUSTOMER_ACTIONS,
          title: "Acciones usuarios",
        },
        "Administración",
        {
          icon: "Users",
          pathname: USERS_ADMIN,
          title: "Usuarios",
        },
      ];
    case "anfitrion":
      return [
        "",
        {
          icon: "Home",
          pathname: ANFITRION_DASHBOARD,
          title: "Inicio",
        },
        {
          icon: "CheckSquare",
          pathname: ATTENDANCE,
          title: "Asistencia",
        },
        {
          icon: "File",
          pathname: DOCUMENTATION,
          title: "Documentación",
        },
      ];
    case "coach":
    case "parents":
    case "academyRole":
      return [
        "",
        {
          icon: "Home",
          pathname: NONE_DASHBOARD,
          title: "Inicio",
        },
      ];
    default:
      return [
        "",
        {
          icon: "Home",
          pathname: NONE_DASHBOARD,
          title: "Inicio",
        },
      ];
  }
};

const initialState: SideMenuState = {
  menu: [
    "",
    {
      icon: "Home",
      pathname: ADMIN_DASHBOARD,
      title: "Inicio",
    },
    "Administración",
    {
      icon: "Users",
      pathname: USERS_ADMIN,
      title: "Usuarios",
    },
    {
      icon: "Mail",
      pathname: GMAIL_INBOX_ADMIN,
      title: "Emails - Gmail",
    },
  ],
};
          
export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

// Selector base que retorna el menú completo
export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

// Selector que filtra el menú basado en los permisos del rol del usuario
export const selectFilteredSideMenu = (state: RootState) => {
  const usersRolesId = state.auth.usersRolesId;
  
  // Retornar el menú específico según el rol
  return getMenuByRole(usersRolesId);
};

export default sideMenuSlice.reducer;
