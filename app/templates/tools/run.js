import moment from 'moment';

/**
 * Transform time in ms to formated time
 *
 * @param  {Object} time moment.js Object
 *
 * @return {string}      formated time
 */
function formatTime(time) {
    return time.format('HH:mm:ss');
}

/**
 * Execute task
 *
 * @param  {Function} task function that returns Promise
 *
 * @return {Promise}
 */
function exec(task) {
    const start = moment();

    console.log(`[${formatTime(start)}] Starting '${task.name}'...`);

    return task().then((data) => {
        const end = moment();
        const duration = end.valueOf() - start.valueOf();

        if (typeof data === 'object' && data.skip === true) {
            return;
        }

        console.log(`\n[${formatTime(end)}] Finished '${task.name}' after ${duration} ms`);
    });
}

// run task
if (process.argv[2]) {
    // eslint-disable-next-line import/no-dynamic-require
    const module = require(`./${process.argv[2]}`).default;

    exec(module).catch(err => console.error(err));
}
