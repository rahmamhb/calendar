//********************* DOM VAR PART ***********************/
let daysDiv = document.querySelector("#days");
let monthYearText = document.querySelector("#dateText")
let leftArrow = document.querySelector("#leftarrow");
let rightArrow = document.querySelector("#rightarrow");
let dateSpan = document.createElement("span");

//*********************** VAR PART **********************/
let myDate = new Date();
let monthArray = ["January","Fabruary","Mars","April","May","June","July","Augest","september","October","November","december"];
let dayArray = ["S","Mdex","T","W","T","F","S"]

/*****************************setting things done for current month */
monthYearText.textContent = `${monthArray[myDate.getMonth()]} ${myDate.getFullYear()}`;
let yearC = myDate.getFullYear();
let monthC = myDate.getMonth();
let daysInMonthC = new Date(yearC,monthC+1,0).getDate() ;
let firstDayIndex = new Date(yearC,monthC,1).getDay();

for(let i = 1 ; i<= daysInMonthC ; i++){

  let elem = document.createElement("span");
  elem.textContent = i;
  console.log()
  if(new Date().getDate() === i ){
    elem.style.backgroundColor = "white";
    elem.style.color ="black";
  }
  daysDiv.appendChild(elem);
}
daysDiv.childNodes.item(1).style.gridColumnStart = `${firstDayIndex+1}`;
//******************** TO SWITCH THE MONTH/YEAR AND DISPLAYING THE DAY OF EACH MONTH*/
function* addDate(month){
while(true){
  yield month++ ;
}
}
function* lessDate(month){
  while(true){
    yield month-- ;
  }
  }
let resultA = addDate(myDate.getMonth());
let resultL = lessDate(myDate.getMonth());
resultA.next() ;
resultL.next() ;


monthYearText.addEventListener("click",()=>{
  monthYearText.style.cursor = "pointer";
  monthYearText.textContent = `${monthArray[myDate.getMonth()]} ${myDate.getFullYear()}`;
  daysDiv.innerHTML = "";
  for(let i = 1 ; i<= daysInMonthC ; i++){
    let elem = document.createElement("span");
    elem.textContent = i;
    console.log()
    if(new Date().getDate() === i ){
      elem.style.backgroundColor = "white";
      elem.style.color ="black";
    }
    daysDiv.appendChild(elem);
  }
  console.log(daysDiv.childNodes)
  daysDiv.childNodes.item(0).style.gridColumnStart = `${firstDayIndex+1}`;
})

leftArrow.addEventListener("click",()=>{
  daysDiv.innerHTML = "";
  let val = resultL.next().value ;
  leftArrow.style.cursor = "pointer";
  monthYearText.textContent = `${monthArray[new Date(myDate.getFullYear(),val).getMonth()]} ${new Date(myDate.getFullYear(),val).getFullYear()}` 
  
  let dateArr = monthYearText.textContent.split(" ");
  let year = +dateArr[1];
  let month = monthArray.indexOf(dateArr[0]);
  let daysInMonth = new Date(year,month+1,0).getDate() ;
  let fDay = new Date(year,month,1).getDay()
  
  for(let i = 1 ; i<= daysInMonth ; i++){
  let elem = document.createElement("span");
  elem.textContent = i;
  daysDiv.appendChild(elem);
  }

  daysDiv.childNodes.item(0).style.gridColumnStart = `${fDay+1}`;

})

rightArrow.addEventListener("click",()=>{
  daysDiv.innerHTML = "";
  let val = resultA.next().value ;
  rightArrow.style.cursor = "pointer";
  monthYearText.textContent = `${monthArray[new Date(myDate.getFullYear(),val).getMonth()]} ${new Date(myDate.getFullYear(),val).getFullYear()}` 
  let dateArr = monthYearText.textContent.split(" ");
  let year = +dateArr[1];
  let month = monthArray.indexOf(dateArr[0]);
  let daysInMonth = new Date(year,month+1,0).getDate() ;
  let fDay = new Date(year,month,1).getDay()
  for(let i = 1 ; i<= daysInMonth ; i++){
  let elem = document.createElement("span");
  elem.textContent = i;
  daysDiv.appendChild(elem);
  }
  daysDiv.childNodes.item(0).style.gridColumnStart = `${fDay+1}`;
})
/****************************PART FO DISPLAYING THE DAY OF EACH MONTH**************************/
console.log(myDate.getDay()); //returns 3
console.log(myDate.getDate()) //retruns 17
console.log(myDate.getMonth()) //returns 7
console.log(myDate.getFullYear()); //returns 2022