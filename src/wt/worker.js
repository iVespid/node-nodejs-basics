// n should be received from main thread
import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const numberFromParent = workerData;
    try {
        // Do the calculation
        const result = nthFibonacci(numberFromParent);

        // Send the result back to the main thread
        parentPort.postMessage({ status: 'resolved', data: result });
    } catch (error) {
        parentPort.postMessage({ status: 'error', data: null });
    }
};

sendResult();