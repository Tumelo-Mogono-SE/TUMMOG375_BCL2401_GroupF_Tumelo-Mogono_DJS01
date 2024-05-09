# DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 is a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge seeks to simulate similar challenges in a spacecraft navigation system, emphasising the need for accuracy in calculations.

#### Challenge Overview

This challenge us to debug, refactor, and enhance the JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions are flawed and may result in incorrect calculations.

![alt text](mars.gif)

##### Initial Parameters

- **Initial Velocity (`vel`)**: The starting speed of the spacecraft, 10,000 km/h.
- **Acceleration (`acc`)**: The spacecraft's acceleration, 3 m/s².
- **Time (`time`)**: The duration of the calculation, 3,600 seconds (equivalent to 1 hour).
- **Initial Distance (`d`)**: The starting distance from the reference point, 0 km.
- **Initial Fuel (`fuel`)**: The starting amount of fuel, 5,000 kg.
- **Fuel Burn Rate (`fbr`)**: The rate at which fuel is consumed, 0.5 kg/s.

##### Expected Corrected Results

- **New Velocity**: Approximately 48880 km/h after correction.
- **New Distance**: Approximately 10000 km after correction.
- **Remaining Fuel**: Approximately 3,200 kg after correction.

# Project Process
* I firstly got the starter code from the repository of codespace. I then first started by creating an object which contains key-value pairs, the keys being the initial variables created for "given parameters", the value being the a nested object which contains two key-value pairs one being value and the other being measurement for unit of measure.
* I then created two variable which I will use for convertions, one for converting kilometers per hour from miles per seconds and the other one for converting seconds to hours.
* Inside the calcNewVelocity funcition I passed a single parameter which will be an object, which I then created variable using properties from the object by using object destructing, I fetched the value and measurements. I then had conditional statements which will throw errors if values are not numbers and the value is not a negative and also checked if the measurements match the required measurement for calculation.
* Then for the calculation I used the variables created from the destructed object and then utilized the conversionRate variable to convert the speed into km/h in order to add the velocity from the speed to the initial velocity value.
* I then created another function to calculate new distance which I did the same thing as I did for the calculate new velocity. For the calculation I just used the convertion variable to turn the time from  seconds to hours by dividing the seconds to hours, which will cancel out the hour in the velocity in order to get km from the calculation.
* For the final function to calculate the remaining fuel, I again utilized object destructing and used the same method as the other two functions for error handling and calculation.
* I then assigned the three functions to variable and passed the object I had created as an argument.


# Challenges
Figuring out the correct method to use for this challenge to ensure that it completes all the requirements such as ensuring the unit of measure is correct. I also didn't undetstand whether when the couches test our code, whether they will test the code by changing values inside the object I created which contains the initial parameter which I pass as key-value pairs.

# Feedback
Due to the LMS problems I had for Monday till Wednesday, I struggle to get through all the material for the module that covered examples of what we need to implement in this project. But I really enjoyed the problem, it showed me the is more ways to solve a problem and I also noticed while working on the challenge, you need to be specific with your code, just because something currently functions doesn't mean it is fine, things can break if someone else works on it and changes things.

