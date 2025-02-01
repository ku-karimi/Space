let currentIndex = 0;

setInterval(changeFunc, 5000);

const sientist = [
    { Name: "GLOVER VICTOR", imgSrc: "../img/image-victor-glover.png", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
    { Name: "SHUTLEWORTH MARK", imgSrc: "../img/image-mark-shuttleworth.png", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
    { Name: "HURLEY DOUGLAS",imgSrc: "../img/image-douglas-hurley.png", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
    { Name: "ANOUSHEH ANSARI", imgSrc: "../img/image-anousheh-ansari.png", Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis asperiores praesentium id esse dolore veniam libero velit." },
];

const discriptTag = document.getElementById("discriptTag");
const nameTag = document.getElementById("nameTag");
const img = document.getElementById("img");
const listsientist = document.getElementsByClassName("scrollBar");

function changeFunc() {
    const Person = sientist[currentIndex];

    nameTag.innerHTML = Person.Name;
    img.src = Person.imgSrc;
    discriptTag.innerHTML = Person.Discription;

    // listsientist[currentIndex].style.background = "snow" ;

    currentIndex = (currentIndex + 1) % sientist.length; 
}