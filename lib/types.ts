export interface UserProps {
    id: string;
    firstName: string;
    email: string;
    phone: string;
}


export interface UserTableProps {
    users: UserProps[] | undefined;
}