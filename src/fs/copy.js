import path from 'path';
import {copyDirectory, getDirPath, isPathPresent} from "./common.js";

const copy = async () => {
    const sourceFolder = path.join(getDirPath(import.meta.url),'files');
    const targetFolder = path.join(getDirPath(import.meta.url),'files_copy');
    const accessTarget = await isPathPresent(targetFolder);
    const accessSource = await isPathPresent(sourceFolder);
    if (accessTarget || !accessSource) {
        throw Error(`FS operation failed`);
    }

    await copyDirectory(sourceFolder, targetFolder);
};

await copy();
