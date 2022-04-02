enum ROLES{
    ADMIN = 'admin',
    SELLER = 'user',
    CUSTOMER = 'customer'
}

type User = {
  username: string;
  role: ROLES;
}

const gianUser: User = {
  username: 'gian',
  role: ROLES.ADMIN
}

console.log({gianUser});

