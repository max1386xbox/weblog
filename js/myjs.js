function border() {
    document.getElementById("navbar").style.borderBottomLeftRadius='10px';
    document.getElementById("navbar").style.borderBottomRightRadius='10px';
  }
  var idHazf = document.getElementById('ani');
function hazf(){
    idHazf.innerHTML='"مک"'
}
function hazf2(){
    idHazf.innerHTML='"م"'
}
function hazf3(){
    idHazf.innerHTML='"مکس"'
}
setInterval(hazf,1000);
setInterval(hazf2,2000);
setInterval(hazf3,4000);

document.getElementsByTagName('h2');
