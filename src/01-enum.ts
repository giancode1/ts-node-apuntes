export enum ROLES{
    ADMIN = 'admin',
    SELLER = 'user',
    CUSTOMER = 'customer'
}

export type User = {
  username: string;
  role: ROLES;
}

const gianUser: User = {
  username: 'gian',
  role: ROLES.ADMIN
}

console.log({gianUser});

