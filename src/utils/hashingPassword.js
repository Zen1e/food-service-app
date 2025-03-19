import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
        const saltRounds = 8;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;

};