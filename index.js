/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const props = {
 velocity : 10000, // velocity (km/h)
 acceleration : 3, // acceleration (m/s^2)
 time : 7200, // seconds (1 hour)
 distance : 0, // distance (km)
 fuel : 5000, // remaining fuel (kg)
 fuelBurnRate : 0.5 // fuel burn rate (kg/s)
}

const conversionRate = 3.6;
// Pick up an error with how the function below is called and make it robust to such errors
const calculateNewVelocity = (props) => { 

  const { velocity, acceleration, time } = props
  return velocity + ((acceleration * time) * conversionRate)
}

const newDistance = props.distance + (props.velocity * (props.time / 3600)) //calcultes new distance
const remainingFuel = props.fuel - props.fuelBurnRate * props.time //calculates remaining fuel
const newVelocity = calculateNewVelocity(props) //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






