import moment from 'moment';

/**
 * Transform time in ms to formated time
 *
 * @param  {Object} time - moment.js Object
 *
 * @return {string}      - formated time
 */
function formatTime(time) {
    return time.format('HH:mm:ss');
}

/**
 * Execute task
 *
 * @param  {Function} fn - task function that returns Promise
 *
 * @return {Promise}
 */
function exec(task) {
    var start = moment();

    console.log(`[${formatTime(start)}] Starting '${task.name}'...`);

    return task().then((data) => {
        var end = moment(),
            duration = end.valueOf() - start.valueOf();

        if (typeof data === 'object' && data.skip === true) {
            return;
        }

        console.log(`\n[${formatTime(end)}] Finished '${task.name}' after ${duration} ms`);
    });
}

// run task
if (process.argv[2]) {
    let module = require(`./${process.argv[2]}`).default;

    exec(module).catch(err => console.error(err));
}
