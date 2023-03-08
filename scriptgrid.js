const cont = d3.select('.container')
const w = +cont.style("width").slice(0, -2)
const h = +cont.style("height").slice(0, -2)

console.log(w, h)

fetch('OntheSamePage-grid.json').then(response => response.json()).then(data => {
    console.log(data);
})