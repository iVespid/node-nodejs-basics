import path from "path";
import {FS_ERROR, getDirPath, isPathPresent} from "./common.js";
import fs from "fs/promises";

const read = async () => {
    const sourceFolder = path.join(getDirPath(import.meta.url),'files', 'fileToRead.txt');

    const accessSource = await isPathPresent(sourceFolder);
    if (!accessSource) {
        throw Error(FS_ERROR);
    }

    console.log(await fs.readFile(sourceFolder, 'utf8'));
};

await read();