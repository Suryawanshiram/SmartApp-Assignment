var input;
var desc;
var job;
let x;
let y;
let
function printdata(){
    input = document.getElementById("l1").value;
    console.log(input)
   desc = document.getElementById("textarea").value;
    console.log(desc);
     job =document.getElementById("i2").value;
    console.log(job); 
   
    const arr=[];
    
    // let name= document.getElementById("output1").innerHTML=input;
    // const namee= document.createElement("h4").innerHTML=input;
    // const descrip = document.createElement("div").innerHTML=desc;
    // const jobb = document.createElement("job").innerHTML=job;

    // let x= document.write("name: "+input)


    x= document.getElementById("name1").innerHTML=input;
   y=  document.getElementById("para1").innerHTML=desc;
    z= document.getElementById("job1").innerHTML=job;




   document.getElementById("name2").innerHTML=input;
  document.getElementById("para2").innerHTML=desc;
    document.getElementById("job2").innerHTML=job;


    
}

function clear(){
    x.innerHTML.value="";
}

clear();
