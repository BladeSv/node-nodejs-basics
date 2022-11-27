import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "fresh.txt");
const content = "I am fresh and young";
const errorMessage = "FS operation failed";

const create = async () => {
  fs.writeFile(filePath, content, { encoding: "utf8", flag: "wx" }).catch(
    (err) => {
      throw new Error(errorMessage);
    }
  );
};

await create();
