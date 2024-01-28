import path from "path";
import fs from "fs/promises";
import {FS_ERROR, isPathPresent} from "./common.js";

const rename = async () => {
    const sourceFolder = path.join('files', 'wrongFilename.txt');
    const targetFolder = path.join('files', 'properFilename.md');

    const accessTarget = await isPathPresent(targetFolder);
    const accessSource = await isPathPresent(sourceFolder);
    if (accessTarget || !accessSource) {
        throw Error(FS_ERROR);
    }

    await fs.rename(sourceFolder, targetFolder)
};

await rename();