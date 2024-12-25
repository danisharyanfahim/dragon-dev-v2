import { promises as fs } from "fs";

export const getStaticFile = async (path: string) => {
  try {
    const file = await fs.readFile(process.cwd() + path, "utf8");
    const data = JSON.parse(file);
    return data;
  } catch (error) {
    console.log(error);
  }
};
