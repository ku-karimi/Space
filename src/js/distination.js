let currentIndex = 0;

setInterval(changeFunc, 4000);

const planets = [
    { Name: "MARS", Distance: "140(m)MIL.KM", TravelTime: "9 MONTH", imgSrc: "../img/image-mars.png", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
    { Name: "EUROPA", Distance: "488(m)MIL.KM", TravelTime: "12 MONTH", imgSrc: "../img/image-europa.png", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
    { Name: "TITAN", Distance: "890(m)MIL.KM", TravelTime: "18 MONTH", imgSrc: "../img/image-titan.png", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
    { Name: "MOON", Distance: "239MIL.KM", TravelTime: "3 DAY", imgSrc: "../img/image-moon.png", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
];

const discriptTag = document.getElementById("discriptTag");
const nameTag = document.getElementById("nameTag");
const distancTag = document.getElementById("distancTag");
const timeTag = document.getElementById("timeTag");
const imgPlant = document.getElementById("imgPlant");
const listPlanet = document.getElementsByClassName("planetList");

function changeFunc() {
    const planet = planets[currentIndex];

    nameTag.innerHTML = planet.Name;
    distancTag.innerHTML = planet.Distance;
    timeTag.innerHTML = planet.TravelTime;
    imgPlant.src = planet.imgSrc;
    discriptTag.innerHTML = planet.Discription;

    for (let x of listPlanet) {
        x.style.borderBottom = "1px solid snow";
    }
    listPlanet[currentIndex].style.borderBottom = "2px solid yellow"; 

    currentIndex = (currentIndex + 1) % planets.length; 
}