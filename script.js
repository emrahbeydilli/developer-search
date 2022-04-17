var users = [
    {
        name: "furkan",
        photo: "img3.png",
        desc: "Full Stack Developer",
        skills: ["HTML","CSS","Javascript"]
    },
    {
        name: "arda",
        photo: "img1.jpg",
        desc: "Back-End Developer",
        skills: ["Javascript","Python"]
    },
    {
        name: "yeşim",
        photo: "img2.jpg",
        desc: "Front-End Developer",
        skills: ["HTML","CSS","Bootstrap"]
    }
]

var photo = document.querySelector("#photo");
var username = document.querySelector("#name");
var desc = document.querySelector("#desc");
var skills = document.querySelector("#skills");
var h3 = document.querySelector("h3");

var userNamePrompt = prompt("Kişi adınız giriniz");

function hideElements(){
    h3.classList.toggle("hide");
}

function isUserValid(user){
    for (let i = 0; i < users.length; i++) {
        if (user === users[i].name) {
            return true;
        }  
    }
    return false;
}

function listSkills(element) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    skills.appendChild(li);
}

function showDeveloper(user,userPhoto,userDesc,userSkills){
    username.textContent = user;
    photo.setAttribute("src",userPhoto);
    desc.textContent = userDesc;
    hideElements();
    userSkills.forEach(listSkills);
}

function findDeveloper(user) {
    if (isUserValid(user)) {
        for (let i = 0; i < users.length; i++) {
            if (user === users[i].name) {
                showDeveloper(user, users[i].photo,users[i].desc, users[i].skills);
            }            
        }
    } else {
        alert("hata!");
    }
}
findDeveloper(userNamePrompt);
