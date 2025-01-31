const bars = document.getElementById("bars");
const menuBar = document.getElementById("menuBar");
const text = document.getElementById("text");

function menuFunc() {
  
  if(menuBar.style.display == "none" || menuBar.style.display === ""){
    menuBar.style.display = "block";
    text.style.marginTop = "180px";
  }else{
    menuBar.style.display = "none" ;
    text.style.marginTop = "180px";
  }
}
bars.addEventListener("click" , menuFunc)
