let gallery = document.querySelector("#gallery");

for(let i=1; i<7; i++){
    num = ('00' + i).slice(-2);


    let li = document.createElement("li");
    li.style.filter = "none";

    let a = document.createElement("a");
    a.href = "images/other/large/"+num+".jpg";

    let img = document.createElement("img");
    img.src = "images/other/large/"+num+".jpg";

    gallery.appendChild(li).appendChild(a).appendChild(img);
}