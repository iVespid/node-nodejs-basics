import { open } from 'node:fs/promises';
import path from "path";
import {getDirPath} from "../fs/common.js";

const read = async () => {
    const file = await open(path.join(getDirPath(import.meta.url), 'files', 'fileToRead.txt'));
    const readStream = file.createReadStream();
    readStream.on('data', k => {
        process.stdout.write(k);
    })
};

await read();