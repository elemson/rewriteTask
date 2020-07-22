### The bugFixed problem:

```setTimeout(() =>
{ logs.push(no);
 allLogs.push(...logs);
 doneCount++;
  if (doneCount == N) { ok(allLogs);
  } }, 10)
```

Hence:

```setTimeout(() => { logs.push(no);
doneCount++;
if (doneCount == N) { allLogs.push(...logs);
ok(allLogs); } }, 10)
```

### Rewrite:

- There are a number of problems with the rewrite-1 file:

  - In the problem file, promise.all ought to have one argument that is iterable, but has two argument.
  - A lot of properties are undefined. For example, argument "thing" in the promise.all parameter is undefined. Also, property init of context is undefined.

- Well, I rewrote all the promises to async await pattern as requested
