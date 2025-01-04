import { parentPort, workerData } from 'worker_threads';

function processData(data: number[]) {
    const result = data.map((item) => ({
        type: `d${item}`,
        result: Math.floor((Math.random() * item) + 1)
    }));
    return result;
}

const result = processData(workerData);
parentPort?.postMessage(result);