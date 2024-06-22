var list =["html","js","css"];
var result="";
for(var i=0; i<3; i++){
    result +=`<li>${list[i]}</li>`;
    document.querySelector("ul").innerHTML=result;
}