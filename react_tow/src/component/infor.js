// let thena='s'.toLowerCase
function sliceDate(date){
   return  date.slice(10)
}
function getDay(theday){
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    return days[theday]
}
export {sliceDate,getDay}