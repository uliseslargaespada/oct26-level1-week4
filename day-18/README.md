# Day 18 investigation: test both branch outcomes

Run `node starter.js` from this folder after your own core program or with a TA for targeted recovery. The starter is intentionally wrong. Its intended rule is that a positive remaining seat count selects the available message; zero selects full. Use valid integer counts through capacity.

1. Predict the condition and message at 9 registrations out of 10. Run and compare.
2. Try 10 out of 10. Identify the condition that sends the program down the wrong path.
3. Fix that comparison while leaving both messages as written. Repeat both tests and record expected versus actual results.
4. Restore the starting count of 9. Explain why testing only one branch gives limited evidence.
