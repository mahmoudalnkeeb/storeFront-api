import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()


 function hash(password: string):string {
  const salt = process.env.SALT;
  const rounds= process.env.HASH_ROUNDS;
  const hash = bcrypt.hashSync(password + salt, Number(rounds));
  return hash
}
 function compareHash(password: string ,hash_string:string ):boolean {
  const salt = process.env.SALT;
  const hash = bcrypt.compareSync(password+salt, hash_string);
  return hash
}
export { hash, compareHash };