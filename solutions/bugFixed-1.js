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
  var allLogs = [];
  var doneCount = 0;

  for (var k in Array(N).fill()) {
    const no = String(k);
    var logs = [];

    setTimeout(() => {
      logs.push(no);

      doneCount++;

      if (doneCount == N) {
        allLogs.push(...logs);
        ok(allLogs);
      }
    }, 10);
  }
}

run(console.log);
