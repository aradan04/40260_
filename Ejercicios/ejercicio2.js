const app = document.getElementById("app")
const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCy4Er5N-HirwAKhJZctULMP4Li5iCkcDXA&s"
const size = "/200/200"

const Picture = parametro =>{
    const src = url+parametro+size
    return `
        <figure>
            <img src="${src}" alt="" >
            <figcaption></figcaption>
        </figure>

    `
}

console.log( Picture (99))
app.innerHTML = Picture(99)
for (let index = 0; index < 10; index++){
    app.innerHTML += Picture(index)
}

let imagenes = document.getElementsByTagName("img")
for(const key in imagenes){
    const imagen = imagenes[key];
    imagen.addEventListener("click", deformar)
}

function deformar(e) {
    console.log(e)
    console.log("hola: " + e.target)
    e.target.classList.toggle("redonda")
}

