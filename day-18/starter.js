const activityName = "Space observation";
const capacity = 10;
const registered = 9;
const seatsLeft = capacity - registered;
const hasSeats = seatsLeft === 0;

console.log(activityName);
if (hasSeats) {
  console.log("A seat is available.");
} else {
  console.log("The activity is full.");
}
