import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'giancode1',
  role: ROLES.ADMIN
}

export const checkAdminRole = (user:User) => {
  return user.role === 'admin' ? true : false
}

console.log(checkAdminRole(currentUser))

//////
export const checkRole = (user:User, roles:string[]) => {
  return roles.includes(user.role) ? true : false
}
console.log('checkRole:', checkRole(currentUser, ['user','seller']))

//REST PARAMS
export const checkRole2 = (user:User, ...roles:string[]) => {
  //roles ahora es un array de strings
  return roles.includes(user.role) ? true : false
}
console.log('checkRole2:', checkRole2(currentUser,'user','seller','admin'))




