# JavaScript foundations: study and practice

For each example, cover the output, predict it, then type/save/run a file to check. Explain the result in a sentence. The examples use fictional attendance numbers. The [weekly practice](../assets/required-practice/README.md) gives separate tasks.

## Values and variables

A quoted value is a string. `12` is a number, `"12"` is text, and `true` is a Boolean. `const` prevents reassigning the variable binding; `let` allows reassignment. Prefer `const` when you do not plan to reassign a name.

```js
const activityName = "Reading circle";
const capacity = 12;
let registered = 9;
registered = registered + 1;
const seatsLeft = capacity - registered;
console.log(activityName, seatsLeft);
console.log(typeof seatsLeft, typeof "2");
```

Output: `Reading circle 2` then `number string`. The assignment uses the old value of `registered` to calculate the new one. `seatsLeft` stores the result at that moment; reassigning `registered` later does not automatically recompute it.

**Quick check:** Predict `2 + 3` and `"2" + 3`. The results are number `5` and string `"23"`. Make the intended types explicit instead of relying on conversion rules.

## Comparisons and decisions

A comparison is an expression that produces a Boolean. `=` assigns; `===` compares without converting types. `>=` includes equality; `>` excludes it.

```js
const capacity = 12;
const registered = 12;
const seatsLeft = capacity - registered;
const isOpen = seatsLeft > 0;

if (isOpen) {
  console.log("Registration open");
} else {
  console.log("Registration closed");
}
```

Output: `Registration closed`. Exactly zero is not positive. If you change the declaration to `const registered = 11;`, save and rerun, one seat remains and the first branch runs. Both `true` and `false` are unquoted. `"false"` is a string, so don't use it as a Boolean variable.

## Trace and debug

Write down the values in execution order before running the program. For a capacity of 12:

| Registered | Calculated seats | Correct `seatsLeft > 0` | Expected message |
| ---: | ---: | --- | --- |
| 11 | 1 | true | Registration open |
| 12 | 0 | false | Registration closed |
| 13 | -1 | false | Registration closed |

In this example 13 is an intentionally tested over-capacity case; it is not a valid registration count for a real system. If the full case prints open, print the inputs and condition, inspect the comparison, change only the faulty check, and run all cases again. A program that runs without errors can still give a wrong answer.

## Functions and return values

A function describes a reusable action. Parameters are names in its definition; arguments are the actual values supplied at a call. Calling a function runs its body. `return` sends a value back to the caller. Displaying a value inside a function does not return it.

```js
function getSeatsLeft(capacity, registered) {
  return capacity - registered;
}

const remaining = getSeatsLeft(12, 9);
console.log(remaining);
console.log(getSeatsLeft(10, 10));
```

Output: first `3`, then `0`. The first call passes 12 and 9, and its result is stored. The second result is used directly by `console.log`. If a function reaches its end without returning a value, the caller receives `undefined`.

**Quick check:** What happens with `console.log(getSeatsLeft(8, 5))`? The output is `3`. Can you explain which values the two parameters hold?

## Before the weekly checkpoint

- I can show the saved file and terminal command that ran it.
- I can name the type of a value and trace an assignment.
- I can explain a comparison result and a branch at the boundary.
- I can demonstrate one expected/observed/fix/retest sequence.
- I can find a function's definition, one call, and where its return value is used.

Review [MDN values and variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types), [decisions](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals), and [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).
