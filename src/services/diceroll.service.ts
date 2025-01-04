import { Worker } from 'worker_threads';

export class DicerollService {
    constructor() { };

    // workerThreads are a huge overkill, it's for educational purposes
    private runDiceroll(workerData: number[]) {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./dist/services/diceroll.worker.js', { workerData });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            })
        })
    };

    public async run(diceTypes: number[]) {
        try {
            return await this.runDiceroll(diceTypes);
        } catch (e) {
            throw e;
        }
    }
}