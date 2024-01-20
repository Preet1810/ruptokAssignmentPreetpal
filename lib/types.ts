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
