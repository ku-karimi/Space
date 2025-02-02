let currentIndex = 0;

setInterval(changeFunc, 5000);

const technology = [
    { Name: "SPACEPORT", imgSrc: "../img/image-spaceport-portrait.jpg", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
    { Name: "SPACE CAPSULE", imgSrc: "../img/image-space-capsule-portrait.jpg", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
    { Name: "HURLEY DOUGLAS",imgSrc: "../img/image-launch-vehicle-portrait.jpg", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
];

const discriptTag = document.getElementById("discriptTag");
const nameTag = document.getElementById("nameTag");
const img = document.getElementById("img");
let listTechnology = document.getElementsByClassName("scrollBar");

function changeFunc() {
    const numberTec = technology[currentIndex];

    nameTag.innerHTML = numberTec.Name;
    img.src = numberTec.imgSrc;
    discriptTag.innerHTML = numberTec.Discription;

    listTechnology[currentIndex].style.backgroundColor = "snow" ;
    listTechnology[currentIndex].style.color = "black" ;

    if(currentIndex != 0){
        listTechnology[currentIndex - 1].style.backgroundColor = "rgba(240, 248, 255, 0)" ;
        listTechnology[currentIndex - 1].style.color = "snow" ;
    }else{
        listTechnology[technology.length - 1].style.backgroundColor = "rgba(240, 248, 255, 0)" ;
        listTechnology[technology.length - 1].style.color = "snow" ;
    }
    
    currentIndex = (currentIndex + 1) % technology.length; 
}