/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
// Created an object which will contain the given parameters which each contains the value and the unit of measure.
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
// Using the prop method, I assigned a single parameter which i will use for object destructing to create variable which will contains properties of the object which will be passed as an argument.
// I then have a condition which checks if the argument is provided.
// I then have conditions which check that each property/value of the variables is not a number or less than zero which if true they throw an error message.
// I then have conditions which check that each variables unit of measure is not the correct unit of measure which if true they throw a error message.
// I then return the calculation for calculating the new velocity by adding the initial velocity with speed in kilometer per hour which is convert from meters per second to kilometer per hour using the conversion variable.
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

// Same as the function for calculating the new velocity, I used the prop method and used object destructing to create variables from the object
// Added conditional statements to throw error messages if the values are less than zero and are not numbers and if the unit of measure is not equal to the correct unit of measure.
// For the return calculation I simply converted the time value to hour using the conversion variable which divides the seconds by 3600 seconds to get an hour, which is the correct unit of measure for calcuations with velocity to cancel out the hour in velocity so that we add to kilometers to get distance.
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

// For this function again i used the prop method to get variables from an object using object destructing and have conditional statements to check if value is not a number or less than zero and ensure the correct unit of measure.
// For the returned calculation I just substracted the fuelburnrate multiplied by time which removes the seconds to have kilograms from the fuel value which is in kilograms.
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

// I then assigned each calculation function to variable with the object passed as an argument
const newDistance = calcNewDistance(props) //calcultes new distance
const remainingFuel = calcRemainingFuel(props) //calculates remaining fuel
const newVelocity = calcNewVelocity(props) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






