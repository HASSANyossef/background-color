let colores = ["red", "blue", "green", "#2b2b2b"];
let color = document.getElementById("color");
// let randamColor = 0;

document.getElementById("btn-color").addEventListener("click", function ()
{
    let randamColor = getrandam();
    console.log(randamColor);

    document.body.style.backgroundColor = colores[randamColor];
    color.textContent = colores[randamColor];
    // randamColor++;
    // console.log(randamColor);
    // if (randamColor==colores.length)
    // {
    //     randamColor = 0;
    // }
})

function getrandam()
{
    return Math.round(Math.random()*colores.length);
}
