export interface UserProps {
    id?: string;
    firstName: string;
    email: string;
    phone: string;
}


export interface UserTableProps {
    users: UserProps[] | undefined;
}


export interface AddUserModalProps {
    state: boolean;
    changeopenState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SidebarProps {
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    showIcon: boolean;
}

export interface NavbarProps {
    isSidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    showIcon: boolean;
    setShowIcon: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ColorSchemeProps {
    colors: string[];
}
