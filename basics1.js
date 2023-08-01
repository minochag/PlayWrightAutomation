console.log("hello world!!")

// these are comments

/* thesee are the customElement
Shift + ALT + A

asdfasdf */


var a = 4
console.log(typeof(a))
//(let, const) introduced in ES6

//var and let both are same.

let ab = "ssa"
console.log(ab)
console.log(typeof(ab))


let required = true
console.log(typeof(required))
console.log(required)
console.log(!required)


///reassigning the vaue is allowed with let 
//but in var reassing and redeclaring is allowed in var


/////////////operator////

let ccc= a+ab
console.log(ccc)



//const- cannot reassigning the value should be constant, can not be change. 








// Function to generate a random birth date
function getRandomBirthDate() {
    // Define the range of birth years (e.g., from 1950 to 2005)
    const minYear = 1950;
    const maxYear = 2005;
  
    // Generate a random year within the range
    const birthYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  
    // Generate a random month (from 1 to 12)
    const birthMonth = Math.floor(Math.random() * 12) + 1;
  
    // Define the number of days in each month
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // If it's a leap year and the month is February, adjust the daysInMonth value
    if (birthYear % 4 === 0 && (birthYear % 100 !== 0 || birthYear % 400 === 0)) {
      daysInMonth[1] = 29;
    }
  
    // Generate a random day within the range for the selected month
    const maxDay = daysInMonth[birthMonth - 1];
    const birthDay = Math.floor(Math.random() * maxDay) + 1;
  
    // Return the random birth date as a string in the format "YYYY-MM-DD"
    return `${birthYear}-${birthMonth.toString().padStart(2, '0')}-${birthDay.toString().padStart(2, '0')}`;
  }
  
  // Example usage:
  const randomBirthDate = getRandomBirthDate();
  console.log(randomBirthDate);




  function generateRandomEmail() {
    const validCharacters = 'pyramid';
    const emailDomain = 'example.com';
    const localPartLength = 10; // You can adjust this value to change the length of the local part
  
    let localPart = '';
    for (let i = 0; i < localPartLength; i++) {
      const randomIndex = Math.floor(Math.random() * validCharacters.length);
      localPart += validCharacters.charAt(randomIndex);
    }
  
    const email = `${localPart}@${emailDomain}`;
    return email;
  }



  