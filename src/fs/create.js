import fs from "fs/promises";
import path from 'path';
import {FS_ERROR, isPathPresent} from "./common.js";

const create = async () => {
    const fileName = 'fresh.txt';
    const filePath = path.join('files', fileName);
    const isPathExists = await isPathPresent(filePath);
    if (isPathExists) {
        throw Error(FS_ERROR);
    } else {
        await fs.writeFile(filePath, 'I am fresh and young', {encoding: 'UTF8'});
    }
};

await create();