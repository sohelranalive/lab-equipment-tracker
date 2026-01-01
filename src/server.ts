import app from "./app";
import config from "./config";
import { prisma } from "./lib/prisma";

const port = config.port || 5000;

async function server() {
  try {
    await prisma.$connect();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    await prisma.$disconnect();
    process.exit(1);
  }
}

server();
