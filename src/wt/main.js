import path from "path";
import {getDirPath} from "../fs/common.js";
import os from "os";
import { Worker } from 'worker_threads';

async function createWorker(number) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(path.join(getDirPath(import.meta.url),'./worker.js'), { workerData: number });
        worker.on('message', resolve);
        worker.on('error', () => resolve({ status: 'error', data: null }));
        worker.on('exit', (code) => {
            if (code !== 0) {
                resolve({status: 'error', data: null});
            }});
    });
}

const performCalculations = async () => {
    const cores = os.cpus().length;
    const results = [];

    for (let i = 0; i < cores; i++) {
        let workerResult = await createWorker(10 + i);
        results.push(workerResult);
    }

    console.log(results);
};

await performCalculations();