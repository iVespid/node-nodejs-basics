import { spawn } from 'child_process';
import path from "path";
import {getDirPath} from "../fs/common.js";

const spawnChildProcess = async (args) => {
    const filePath = path.join(getDirPath(import.meta.url),'files', 'script.js')
    const childProcess = spawn('node', [filePath, ...args]);

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['test1', 123, true, 'CLOSE']);
