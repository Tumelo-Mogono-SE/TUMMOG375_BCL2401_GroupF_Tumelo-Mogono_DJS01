/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const props = {
 velocity : {
    value: 10000,
    measurement:"km/h" 
  },
 acceleration : {
    value: 3,
    measurement: "m/s^2"
  }, // acceleration (m/s^2)
 time : {
    value: 3600,
    measurement: "seconds" 
  }, // seconds (1 hour)
 distance : {
    value: 0,
    measurement: "km"
  }, // distance (km)
 fuel : {
    value: 5000,
    measurement: "kg"
  }, // remaining fuel (kg)
 fuelBurnRate : {
    value: 0.5,
    measurement: "kg/s"
 } // fuel burn rate (kg/s)
};

// Variable used to convert values for 
const conversionRateToKilometersPerHour = 3.6;
const convertionOfSecondsToHour = 3600;

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVelocity = (props) => { 

  if (!props) throw Error("'Props' is required!");

  const { velocity : {value: velocityValue, measurement: velocityMeasurement}, acceleration : {value: accelerationValue, measurement: accelerationMeasurement}, time : {value: timeValue, measurement: timeMeasurement} } = props;

  if(typeof(velocityValue) !== "number" || velocityValue < 0) throw Error("Positive 'Velocity' number is required!");
  if(typeof(accelerationValue) !== "number" || accelerationValue < 0) throw Error("Positive 'acceleration' number is required!");
  if(timeValue < 0 || typeof(timeValue) !== "number" ) throw Error("Positive 'time' number is required!");
  if(velocityMeasurement !== "km/h") throw Error("Correct 'Velocity' unit of measurement is required. Expected: km/h");
  if(accelerationMeasurement !== "m/s^2") throw Error("Correct 'acceleration' unit of measurement is required. Expected: m/s^2");
  if(timeMeasurement !== "seconds" ) throw Error("Correct 'time' unit of measurement is required. Expected: seconds");
  

  return velocityValue + ((accelerationValue * timeValue) * conversionRateToKilometersPerHour);
};

const calcNewDistance = (props) => {

  if (!props) throw Error("'Props' is required!");

  const { velocity : {value: velocityValue, measurement: velocityMeasurement}, distance : {value: distanceValue, measurement: distanceMeasurement}, time : {value: timeValue, measurement: timeMeasurement} } = props;

  if(velocityValue < 0 || typeof(velocityValue) !== "number") throw Error("Positive 'Velocity' value is required!");
  if(distanceValue < 0 || typeof(distanceValue) !== "number") throw Error("Positive 'distance' value is required!");
  if(timeValue < 0 || typeof(timeValue) !== "number" ) throw Error("Positive 'time' value is required!");
  if(velocityMeasurement !== "km/h") throw Error("Correct 'Velocity' unit of measurement is required. Expected: km/h");
  if(distanceMeasurement !== "km") throw Error("Correct 'distance' unit of measurement is required. Expected: km");
  if(timeMeasurement !== "seconds" ) throw Error("Correct 'time' unit of measurement is required. Expected: seconds");

  return distanceValue + (velocityValue * (timeValue / convertionOfSecondsToHour));
};

const calcRemainingFuel = (props) => {

  if (!props) throw Error("'Props' is required!");

  const { fuel : {value: fuelValue, measurement: fuelMeasurement}, fuelBurnRate : {value: fuelBurnRateValue, measurement: fuelBurnRatenMeasurement}, time : {value: timeValue, measurement: timeMeasurement} } = props;

  if(typeof(fuelValue) !== "number" || fuelValue < 0) throw Error("Positive 'fuel' number is required!");
  if(typeof(fuelBurnRateValue) !== "number" || fuelBurnRateValue <= 0) throw Error("Positive 'fuelBurnRate' number is required!");
  if(timeValue < 0 || typeof(timeValue) !== "number" ) throw Error("'time' is required!");
  if(fuelMeasurement !== "kg") throw Error("Correct 'fuel' unit of measurement is required. Expected: kg");
  if(fuelBurnRatenMeasurement !== "kg/s") throw Error("Correct 'fuelBurnRate' unit of measurement is required. Expected: kg/s");
  if(timeMeasurement !== "seconds" ) throw Error("Correct 'time' unit of measurement is required. Expected: seconds");

  return fuelValue - fuelBurnRateValue * timeValue;
};

const newDistance = calcNewDistance(props) //calcultes new distance
const remainingFuel = calcRemainingFuel(props) //calculates remaining fuel
const newVelocity = calcNewVelocity(props) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






