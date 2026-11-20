// One comparison intentionally disagrees with the stated rule.
const learnerCount = 7;
const kitCount = 7;
const deskIsOpen = true;

if (!deskIsOpen) {
  console.log("The desk is closed.");
} else if (kitCount > learnerCount) {
  console.log("Enough kits.");
} else {
  console.log("More kits needed.");
}
