/**
 * The following program prints the following output (N=5):
 * [
 *   '0', '0', '1', '0',
 *   '1', '2', '0', '1',
 *   '2', '3', '0', '1',
 *   '2', '3', '4'
 * ]
 *
 * It is instead expected to print a set of N unique values, for example (N=5):
 * [ '0', '1', '2', '3', '4' ]
 *
 * Where is the bug?
 */

const N = 5;

function run(ok) {
  let allLogs = [];
  let doneCount = 0;

  for (var k in Array(N).fill()) {
    const no = String(k);
    let logs = [];

    setTimeout(() => {
      logs.push(no);
      allLogs.push(...logs);
      doneCount++;
      if (doneCount == N) {
        ok(allLogs);
      }
    }, 10);
  }
}

run(console.log);
