let gallery = document.querySelector("#gallery");

for(let i=1; i<48; i++){
    num = ('00' + i).slice(-2);


    let li = document.createElement("li");

    let a = document.createElement("a");
    a.href = "images/landscape_etc/large/"+num+".jpg";

    let img = document.createElement("img");
    img.src = "images/landscape_etc/small/"+num+".jpg";

    gallery.appendChild(li).appendChild(a).appendChild(img);
}