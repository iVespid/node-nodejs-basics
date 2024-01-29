import path from "path";
import {getDirPath} from "../fs/common.js";
import {createReadStream, createWriteStream} from "fs";
import {createUnzip} from "zlib";
import {promisify} from "util";
import {pipeline} from "stream";

const decompress = async () => {
    const targetPath = path.join(getDirPath(import.meta.url), 'files', 'fileToCompress.txt');
    const sourcePath = path.join(getDirPath(import.meta.url), 'files', 'archive.gz');
    const sourceStream = createReadStream(sourcePath);
    const targetStream = createWriteStream(targetPath);
    const zipStream = createUnzip();
    await promisify(pipeline)(sourceStream, zipStream, targetStream);
};

await decompress();