import crypto from 'crypto';
import fs from "fs/promises";
import {getDirPath} from "../fs/common.js";
import path from "path";

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const fileContent = await fs.readFile(path.join(getDirPath(import.meta.url), 'files', 'fileToCalculateHashFor.txt'), {encoding: 'utf8'})
    hash.write(fileContent);
    hash.end();
    console.log(hash.read().toString('hex'));
};

await calculateHash();