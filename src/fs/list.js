import path from "path";
import {FS_ERROR, getDirPath, isPathPresent} from "./common.js";
import fs from "fs/promises";

const list = async () => {
    const sourceFolder = path.join(getDirPath(import.meta.url),'files');

    const accessSource = await isPathPresent(sourceFolder);
    if (!accessSource) {
        throw Error(FS_ERROR);
    }

    console.log(await fs.readdir(sourceFolder));
};

await list();