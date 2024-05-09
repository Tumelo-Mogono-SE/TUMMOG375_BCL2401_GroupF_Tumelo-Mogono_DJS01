/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const props = {
 velocity : {
    value: "",
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
}

const conversionRateToKilometersPerHour = 3.6;

// Pick up an error with how the function below is called and make it robust to such errors
const calculateNewVelocity = (props) => { 

  if (!props) throw Error("'Props' is required!");

  const { velocity : {value: velocityValue, measurement: velocityMeasurement}, acceleration : {value: accelerationValue, measurement: accelerationMeasurement}, time : {value: timeValue, measurement: timeMeasurement} } = props;

  if(!velocityValue || isNaN(velocityValue)) throw Error("'Velocity' is required!");
  if(isNaN(accelerationValue)) throw Error("'acceleration' is required!");
  if(timeValue < 0 || isNaN(timeValue) ) throw Error("'time' is required!");
  if(!velocityMeasurement || velocityMeasurement !== "km/h") throw Error("Correct 'Velocity' unit of measurement is required. Expected: km/h");
  if(!accelerationMeasurement || accelerationMeasurement !== "m/s^2") throw Error("Correct 'acceleration' unit of measurement is required. Expected: m/s^2");
  if(timeMeasurement !== "seconds" ) throw Error("Correct 'time' unit of measurement is required. Expected: seconds");
  

  return velocityValue + ((accelerationValue * timeValue) * conversionRateToKilometersPerHour);
}

const newDistance = props.distance.value + (props.velocity.value * (props.time.value / 3600)) //calcultes new distance
const remainingFuel = props.fuel.value - props.fuelBurnRate.value * props.time.value //calculates remaining fuel
const newVelocity = calculateNewVelocity(props) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






