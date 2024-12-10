import { parentPort, workerData } from 'worker_threads';

function processData(data: {diceType: 'd4' | 'd6' | 'd10'}) {
    return data;
}

const result = processData(workerData);
parentPort?.postMessage(result);