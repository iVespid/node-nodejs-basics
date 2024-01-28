import { createReadStream } from 'fs';
import path from "path";
import {getDirPath} from "../fs/common.js";

const read = async () => {
    const readStream = createReadStream(path.join(getDirPath(import.meta.url), 'files', 'fileToRead.txt'));
    readStream.on('data', k => {
        process.stdout.write(k);
    })
};

await read();