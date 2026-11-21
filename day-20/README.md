# Optional investigation: A number that never reaches the caller

After required practice, run `node packing-labels.js`. The example should calculate one label per kit and add the requested number of spares. For 7 kits and 2 spares it should show a total of 9 and, if one spare is added, 10.

Find out why the function displays 9 but the rest of the program cannot do arithmetic with it. Repair the function so it gives the number to its caller. Keep the display at the call site and do not hard-code a result. Predict and test 7 kits with 0 spares and 4 kits with 3 spares by changing the arguments alone.

Record which names are parameters, what arguments you tried, which value was returned, and which calls display it. Bonus: explain why changing a parameter's name consistently does not change what the caller passes.
