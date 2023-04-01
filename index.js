// Your code here
//createEmployeeRecord
let teseEmployee= (["firstName","familyName","title", 1, timeInEvents[''], timeOutEvents['']])
function createEmployeeRecord(employee) {
    return{ 
    firstName:employee[0],
     familyName:employee[1], 
     title:employee[2],
      payPerHour:employee[3], 
      timeInEvents:[], 
      timeOutEvents:[],
}
}
//createEmployeeRecords
let employeeRecords ;
let rows= [
    ["firstName","familyName","title", 2 ],
    ["firstName","familyName","title", 3]
]
let dataEmployees=[
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300],
    ["Byron", "Poodle", "Mascot", 3],
    ["Julius", "Caesar", "General", 27],
    ["Rafiki", "", "Aide", 10],
    ["Simba", "", "King", 100]
]
employeeRecords.length=10
function createEmployeeRecords(employee){
    return employee.map(record=>createEmployeeRecord(record))
}
//createTimeInEvent
let bpRecord, updatedBpRecord, newEvent
 bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
 updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")
 newEvent.date="2014-02-28 1400"
newEvent.type = 1400
function createTimeInEvent(employeeRecord, date){
    let newTimeInEvent={
        type:"TimeIn",
        hour: parseInt(date.slice (-4)) ,
        date:date.slice(0,10)
    }
    employeeRecord.timeInEvents.push(newTimeInEvent)
    return employeeRecord
}
//createTimeOutEvent
 bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
 updatedBpRecord = createTimeOutEvent(bpRecord, "2015-02-28 1700")
 newEvent.date =("2015-02-28")
 newEvent.type=1700
function createTimeOutEvent(employeeRecord, date){
   let newTimeOutEvent ={
        type:"TimeOut",
        hour: parseInt(date.slice (-4)),
        date:date.slice(0,10)
    }
   employeeRecord.timeOutEvents.push(newTimeOutEvent)
    return employeeRecord
}   
//hoursWorkedOnDate calculates that employee worked for two hours
function hoursWorkedOnDate(employeeRecord, date){
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour)/100;
  }
//wagesEarnedOnDate
function wagesEarnedOnDate(employeeRecord, date){
    return hoursWorkedOnDate(employeeRecord,date)*employeeRecord.payPerHour;
}
  //allWagesFor
  //allWagesFor aggregates all the dates' wages and adds them together
function allWagesFor(employeeRecord){ 
let allWages =employeeRecord .timeInEvents.map(e =>wagesEarnedOnDate(employeeRecord,e.date));
return allWages.reduce(( total,wage)=>total+wage)
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
}
//calculatePayroll
function calculatePayroll(employeeRecords){
  let totalForEachEmployee=employeeRecords.map(record=>allWagesFor(record))
  return totalForEachEmployee.reduce((total, employeeTotal)=>total+employeeTotal)
}
