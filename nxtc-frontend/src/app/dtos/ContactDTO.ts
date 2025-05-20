export interface ContactDTO {
    id?: number;
    name: string;
    email: string;
    telephone: string;
    cellphone: string;
    favorite: boolean;
    active?: boolean;
}