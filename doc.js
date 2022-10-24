
var cont = document.createElement("div");
cont.setAttribute("class","container")
document.body.append(cont)
// createing a row in container

// var fin = document.createElement("div");
// fin.setAttribute("class","row");
// cont.append(fin)
// var result = fetch("https://restcountries.com/v2/all").then((data1)=>data1.json()).then((data)=>foo(data))
var fin = document.createElement("div");
fin.setAttribute("class","row");
cont.append(fin)
async function bar(){

  var result = await fetch("https://restcountries.com/v2/all")
  var res =await result.json();
for(var i=0; i<res.length; i++){
   var name=res[i].name;
  var latlong=res[i].latlng;
  // opendata(name,...latlong);


try{
  var col = document.createElement("div")
col.setAttribute("class","col-sm-12 col-lg-4")
col.innerHTML+=`<div class="cardGroup">
<div class="card"id="card">
<h4 class="card-title">${res[i].name}</h4>
  <img src="${res[i].flag}" class="card-img-top" alt="...">
  <hr>
  <div class="card-body">
    <h5>CAPTIAL: <b>${res[i].capital.toUpperCase()}<b>
    <h5>REGION: <b>${res[i].region.toUpperCase()}<b>   
    <h5>CODE: <b>${res[i]. numericCode.toUpperCase()}<b> 
    <button clas="btn" onclick=" ()">CLICK FOR WHETHER</BUTTON>
       
    </div>`
    
  
fin.append(col)
}
catch(error){
console.log("hello")
}


}  



}
// async function opendata(name,lat,lon){
  
//   var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=249e1a5a0f39048486d0fc18ea837c96`)
//   var fin = await res.json();
//   try{
//   console.log(name,fin.main.temp)
//   }catch(error){
//     if(temp==undefined){
//    console.log("temp error");
//     }
//   }

// }
bar()


// foo();







// function foo(res){
//    var data = res
//   for(var i=0; i<data.length; i++){
   
//     var res5 = document.createElement("div");
//     res5.setAttribute("class","col-sm-12")
//     res5.classList.add("col-md-6","col-lg-4")
//       res5.innerHTML+=`<div class="card">
//       <h3 class="card-title">${data[i].name}</h3>
//       <img src=${data[i].flag}
        
//       <h4>Capital:${data[i].capital}</h4>
//       <h6>Region:${data[i].region}</h6>
//       <h6>Country code:${data[i].numericCode
//       }</h6>
//       <button>Click me</button>
//       </div>
     
//     </div>`
  //   var z = i+1;
  //   var res1 = document.createElement("div");
  //   res1.setAttribute("class","col-sm-12")
  //   res1.classList.add("col-md-6","col-lg-4")
  //   res1.innerHTML=`<div class="card">
  //   <h3 class="card-title">${data[z].name}</h3>
  //   <img src=${data[z].flag}
      
  //   <h4>Capital:${data[z].capital}</h4>
  //   <h6>Region:${data[z].region}</h6>
  //   <h6>Country code:${data[z].numericCode
  //   }</h6>
  //   <button>Click me</button>
  //   </div>`
  //   var x =i+2
  //   var res2 = document.createElement("div");
  //   res2.setAttribute("class","col-sm-12")
  //   res2.classList.add("col-md-6","col-lg-4")
  //   res2.innerHTML=`<div class="card">
  //   <h3 class="card-title">${data[x].name}</h3>
  //   <img src=${data[x].flag}
      
  //   <h4>Capital:${data[x].capital}</h4>
  //   <h6>Region:${data[x].region}</h6>
  //   <h6>Country code:${data[x].numericCode
  //   }</h6>
  //   <button>Click me</button>
  //   </div>`
//    fin.append(res5)
//   //  i=x
   
// }
// };