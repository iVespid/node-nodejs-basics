import {createReadStream, createWriteStream} from 'fs';
import path from "path";
import {getDirPath} from "../fs/common.js";

const write = async () => {
    const writeStream = createWriteStream(path.join(getDirPath(import.meta.url), 'files', 'fileToWrite.txt'));
    process.stdin.on('data', k => {
        writeStream.write(k);
    });
};

await write();