import path from "path";
import {FS_ERROR, isPathPresent} from "./common.js";
import fs from "fs/promises";

const list = async () => {
    const sourceFolder = path.join('files');

    const accessSource = await isPathPresent(sourceFolder);
    if (!accessSource) {
        throw Error(FS_ERROR);
    }

    console.log(await fs.readdir(sourceFolder));
};

await list();