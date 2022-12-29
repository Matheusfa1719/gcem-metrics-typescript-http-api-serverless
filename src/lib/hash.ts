import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  const hash = bcrypt.hash(password, salt);
  return hash;
}