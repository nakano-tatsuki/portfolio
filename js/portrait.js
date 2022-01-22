let gallery = document.querySelector("#gallery");

for(let i=1; i<25; i++){
    num = ('00' + i).slice(-2);


    let li = document.createElement("li");

    let a = document.createElement("a");
    a.href = "images/portrait/large/"+num+".jpg";

    let img = document.createElement("img");
    img.src = "images/portrait/small/"+num+".jpg";

    gallery.appendChild(li).appendChild(a).appendChild(img);
}