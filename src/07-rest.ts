import { User, ROLES } from './01-enum';

const currentUser: User = {
    username: 'emilio2020',
    role: ROLES.ADMIN
}

export const checkAdminRole = () => {
    if (currentUser.role === ROLES.ADMIN) {
        return true;
    }
    return false;
}

console.log(checkAdminRole());

/*
esto es lo mismo
const checkRol = (...rol) => {
    
    if (rol.includes(currentUser.role)) {
        return true;
    }
    return false;
}
que esto
const checkRol = (...rol: string[]): boolean => {
    if (rol.includes(currentUser.role)) {
        return true;
    }
    return false;
}
*/