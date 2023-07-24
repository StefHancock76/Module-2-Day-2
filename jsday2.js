let budget = 1000;

if(budget > 50){
    console.log("Ride a taxi");
} else if (budget > 30 && budget <= 50){
    console.log("Ride a bus");
} else if (budget > 10 && budget <= 30){
    console.log("Ride a train");
} else {
    console.log("Ride a bike");
}


//from class today 07-12-2023
//let day1 = "Sunday"
//let day2 = "Monday"
//let day3 = "thrusday"
//function checkWeekend(day) {
//if (day.toLocaleLowerCase() == "sunday" || day.toLocaleLowerCase() == "saturday"){
//console.log("It is the Weekend")
//} else {
//console.log("It is not the weekend");
//}
//}
//checkWeekend(day1);
//checkWeekend(day2);
//checkWeekend(day3);
//checkWeekend("SatUrDay")



let students = ["John", "Kyle", "Tom", "Steve", "Mildred"]
let students2 = {stu1: "Haoyu", stu2:"Leo",}
for (let item in students)
   {console.log(item)}
for (let item of students)
   {console.log(item)}
for (let item in students2)
   {console.log(students2[item]);}
   
   
   let q1test = 15;
   for(q1test=1;q1test<=100;q1test++){
     if(q1test%3==0 || q1test%5==0){
       console.log(q1test)
     }
   }


const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);
