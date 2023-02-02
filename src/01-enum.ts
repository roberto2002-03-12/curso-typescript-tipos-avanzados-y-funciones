/*
es como un array de objetos para seleccionar opciones, basicamente en js creas un objeto
y estableces los valores, similar.
*/
export enum ROLES {
    ADMIN = "admin",
    SELLER = "seller",
    CUSTOMER = "customer"
}

export type User = {
    username: string,
    role: ROLES,
}

const emiUser: User = {
    username: "emi.contreras",
    role: ROLES.ADMIN
}