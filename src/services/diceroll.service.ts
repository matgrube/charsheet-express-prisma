import { Worker } from 'worker_threads';

export class DicerollService {
    constructor() {};

    // workerThreads are a huge overkill, it's for educational purposes
    private runDiceroll(workerData: {diceType: 'd4' | 'd6' | 'd20'}) {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./diceroll.worker.ts', { workerData });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            })
        })
    };

    public async run(diceType: 'd4' | 'd6' | 'd20') {
        try {
            const result = await this.runDiceroll({diceType});
            console.log(result);
            return result;
        } catch (e) {
            throw e;
        }
    }
}