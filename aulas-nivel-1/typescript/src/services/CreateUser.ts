/**
 * Para criar um usuário: name, email, password
 */

interface TechObject {
  title: string,
  xp: number
}
 
interface CreateUserData {
  name?: string
  email: string
  password: string
  techs: Array<string | TechObject>
}
 
export default function createUser({ name = '', email, password } : CreateUserData) {
  const user = {
    name,
    email,
    password
  }
}