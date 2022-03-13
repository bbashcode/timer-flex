/**
 * 
 * Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
 * Example Run: node timer1.js 10 3 5 15 9 
 * Edge Cases
 * With every software project, developers need to think about edge cases.

 * Instruction
 * Confirm that our script can handle some common edge cases.

 * For this app, we can think of at least these three:

 * No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
 * An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
 * An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
 */

  const input = process.argv.slice(2);

  const timer = function setAlarmTimers (inputArray){

    if(inputArray.length === 0){
      return;
    }
    for(let time of inputArray){
      if(typeof time !== "number" || time < 0){
        continue;
      }
      setTimeout(()=>{
        process.stdout.write('\x07');
      }, time)
    }
  }

  timer(input);