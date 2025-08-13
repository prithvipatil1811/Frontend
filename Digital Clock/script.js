const time = document.querySelector('#clock')

//with this code below current date is displayed in detail with time at the moment of execution using inbuild object "Date"
/*
let date = new Date()
time.innerHTML=date.toLocaleTimeString();
*/
// BUT the problem with this is it doesnt update on its own as the function only runs once...
//So to execute a function after some fixed interval, the setInerval() function is used.... it takes 2 arguments----1. The function to be executed and 2. The time interval in millisecs

setInterval(function(){
  let date = new Date()
  time.innerHTML=date.toLocaleTimeString();
},1000)