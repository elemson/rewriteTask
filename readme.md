### The bugFixed problem:

```
setTimeout(() =>
{ logs.push(no);
 allLogs.push(...logs);
 doneCount++;
  if (doneCount == N) { ok(allLogs);
  } }, 10)
```

This code `allLogs.push(...logs)` is out of the conditonal statement, so executes outside the condition and therefore returns undesired result.

Hence:

```
setTimeout(() => { logs.push(no);
doneCount++;
if (doneCount == N) { allLogs.push(...logs);
ok(allLogs); } }, 10)

```

### Alternative solution to the bugfix problem:

Alternatively, there is problem with the scoping. Var is a function scope that exists outside the for-loop, so array pushed to it after every iteration are retained. Therefore, returning total values of the array. However, using let preserves the variable in the loop, and for every loop, it only returns the next iteration.

### Rewrite:

- There are a number of problems with the rewrite-1 file:

  - In the problem file, promise.all ought to have one argument that is iterable, but has two argument.
  - A lot of properties are undefined. For example, argument "thing" in the promise.all parameter is undefined. Also, property init of context is undefined.

- Well, I rewrote all the promises to async await pattern as requested
