function getLabelTotal(kitCount, spareCount) {
  // This prints a total but fails to give that value back to the call site.
  console.log(kitCount + spareCount);
}

const labels = getLabelTotal(7, 2);
console.log("Labels to prepare:", labels);
console.log("If one more spare is needed:", labels + 1);
