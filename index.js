const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulator, num) => accumulator + num)

//Not sure what this would be used for... seems more practical as a function:
// const totalBatteries = () => batteryBatches.reduce((accumulator,num) => accumulator + num)