import path from "path";
import {FS_ERROR, isPathPresent} from "./common.js";
import fs from "fs/promises";

const remove = async () => {
    const sourceFolder = path.join('files', 'fileToRemove.txt');

    const accessSource = await isPathPresent(sourceFolder);
    if (!accessSource) {
        throw Error(FS_ERROR);
    }

    await fs.unlink(sourceFolder);
};

await remove();