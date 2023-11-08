const container = document.querySelector('.container')
let size = 16
//res - resolution change btn
const resBtn = document.querySelector('#res')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getRandomRGB(){
    return `rgb(${getRandomInt(365)},${getRandomInt(365)},${getRandomInt(365)})`
}

//creating grid
function createGrid(size) {
    let height = 960/size
    for (i = 0; i < size; i++) {
        const divColumn = document.createElement('div')
        divColumn.className = 'grid-column'
        divColumn.style.height = `${height}px`
        for (x = 0; x < size; x++) {
            const divRow = document.createElement('div')
            divRow.className = 'grid-row'
            divColumn.appendChild(divRow)
        }
        container.appendChild(divColumn)

        const gridRow = document.querySelectorAll('.grid-row')
        gridRow.forEach(div => {
            div.addEventListener('mouseover', (e) => {
                // div.className = 'grid-row black'
                div.style.backgroundColor = getRandomRGB()
            })
        })
    }
}

createGrid(size)

resBtn.addEventListener('click', (e) => {
    size = prompt('change number of sqares per side. Maximum - 100, Minimum - 16')
    while(size > 100 | size<16 ){
        size = prompt('change number of sqares per side. Maximum - 100, Minimum - 16')
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    createGrid(size)

})

