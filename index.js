const original = document.querySelector(".original");
const calulate = document.querySelector(".submit");
const result1 = document.querySelector(".years");
const result2 = document.querySelector(".months");
const result3 = document.querySelector(".days");
const result4=document.querySelector(".msg");
calulate.addEventListener("click", () => {
  if (original.value == "") {
    alert("Please enter the date of birth");
  } else {
    // for initilization
    const dob = new Date(original.value);
    const currentdob = new Date();

    //for the months,years and days
    let yearoriginal = dob.getFullYear();
    let yearcurrent = currentdob.getFullYear();
    let monthoriginal = dob.getMonth();
    let monthcurrent = currentdob.getMonth();
    let dayoriginal = dob.getDate();
    let daycurrent = currentdob.getDate();

    function getDaysInMonth(month, year) {
     
      const date = new Date(year, month - 1, 1);

      
      date.setMonth(date.getMonth() + 1);
      date.setDate(date.getDate() - 1);

      
      return date.getDate();
    }
let age;
let month;
let day;
    if (daycurrent > dayoriginal) {
      if (monthcurrent > monthoriginal) {
        if (yearcurrent > yearoriginal) {
           age = yearcurrent - yearoriginal;
           month = monthcurrent - monthoriginal;
           day = daycurrent - dayoriginal;
          console.log(age, month, day);
          result1.innerText = `${age}`;
          result2.innerText = `${month}`;
          result3.innerText = `${day}`;
        } else {
          alert("Year can exceed current year");
        }
      } else {
        yearcurrent -= 1;
        monthcurrent += 12;
        if (yearcurrent > yearoriginal) {
          age = yearcurrent - yearoriginal;
          month = monthcurrent - monthoriginal;
          day = daycurrent - dayoriginal;
          console.log(age, month, day);
          result1.innerText = `${age}`;
          result2.innerText = `${month}`;
          result3.innerText = `${day}`;
        }
      }
    } else {
      const adddays = getDaysInMonth(monthcurrent, yearcurrent);
      monthcurrent -= 1;
      daycurrent += adddays;
      if (monthcurrent > monthoriginal) {
        if (yearcurrent > yearoriginal) {
           age = yearcurrent - yearoriginal;
           month = monthcurrent - monthoriginal;
           day = daycurrent - dayoriginal;
          console.log(age, month, day);
          result1.innerText = `${age}`;
          result2.innerText = `${month}`;
          result3.innerText = `${day}`;
        }
      }
    }
 

  if (daycurrent > dayoriginal) {
    const adddays = getDaysInMonth(monthcurrent, yearcurrent);
    monthcurrent -= 1;
    daycurrent += adddays;
    if (monthcurrent < monthoriginal) {
      yearcurrent -= 1;
      monthcurrent += 12;
      if (yearcurrent > yearoriginal) {
         age = yearcurrent - yearoriginal;
         month = monthcurrent - monthoriginal;
         day = daycurrent - dayoriginal;
        console.log(age, month, day);
        result1.innerText = `${age}`;
        result2.innerText = `${month}`;
        result3.innerText = `${day}`;
        
      }
    }
  }
  result4.innerText=`Your Age Currently is ${age}, Years ${month}Months, ${day}Days`;
}

});
