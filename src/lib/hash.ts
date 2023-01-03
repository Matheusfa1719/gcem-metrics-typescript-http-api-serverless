import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  const hash = bcrypt.hash(password, salt);
  return hash;
}

export const comparePassword = async (hash: string, password: string) => {
  const isValidPassword = await bcrypt.compare(password, hash);
  return isValidPassword;
}