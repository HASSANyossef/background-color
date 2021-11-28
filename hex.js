let hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let color = document.getElementById("color");

document.getElementById("btn-color").addEventListener("click", function ()
{
    let hexColor = '#';
    for (let i = 0; i < 6; i++)
    {
        hexColor += hexa[getRandam()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandam()
{
    return Math.floor(Math.random()*hexa.length);
}