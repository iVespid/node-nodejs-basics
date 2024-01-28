import path from 'path';
import {copyDirectory, isPathPresent} from "./common.js";

const copy = async () => {
    const sourceFolder = path.join('files');
    const targetFolder = path.join('files_copy');
    const accessTarget = await isPathPresent(targetFolder);
    const accessSource = await isPathPresent(sourceFolder);
    if (accessTarget || !accessSource) {
        throw Error(`FS operation failed`);
    }

    await copyDirectory(sourceFolder, targetFolder);
};

await copy();
