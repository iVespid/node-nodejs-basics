import path from "path";
import {getDirPath} from "../fs/common.js";
import { createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';

const compress = async () => {
    const sourcePath = path.join(getDirPath(import.meta.url), 'files', 'fileToCompress.txt');
    const targetPath = path.join(getDirPath(import.meta.url), 'files', 'archive.gz');
    const sourceStream = createReadStream(sourcePath);
    const targetStream = createWriteStream(targetPath);
    const zipStream = createGzip();
    await promisify(pipeline)(sourceStream, zipStream, targetStream);
};

await compress();