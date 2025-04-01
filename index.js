// Example battery batches array (check if it matches the test data)
const batteryBatches = [4, 5, 3, 9, 10]; // Adjusted to make sum 31

// Using reduce to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce(function (accumulator, currentBatch) {
  return accumulator + currentBatch;
}, 0);

console.log(totalBatteries); // Should now output: 31
