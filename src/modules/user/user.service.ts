import { prisma } from "../../lib/prisma";

const createUser = async (data: any) => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};

export const userService = {
  createUser,
};
