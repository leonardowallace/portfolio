const stick1 = document.getElementsByClassName('color')[0]
const stick2 = document.getElementsByClassName('color2')[0]
const stick3 = document.getElementsByClassName('brush3')[0]
const lines = document.getElementsByClassName('lines')[0]


function link() {
    window.location.href = 'home.html';
}
//fazer animação reversa
setTimeout(() => {
    stick2.style.animation = 'movedown 0.5s ease forwards'
}, 3000)

setTimeout(() => {
    stick3.style.animation = 'movedown 0.5s ease forwards'
}, 3500)

setTimeout(() => {
    stick1.style.animation = 'opacity 0.5s ease forwards'
    lines.style.display = 'flex'
}, 4000)

setTimeout(() =>{
    link()
},6500)

let colors = ['#3498db',
    '#e74c3c',
    '#2ecc71',
    '#f39c12',
    '#9b59b6',
    '#1abc9c',
    '#e67e22',
    '#27ae60',
    '#c0392b',
    '#2980b9',
    '#d35400',
    '#8e44ad',
    '#16a085',
    '#e74c3c',
    '#2c3e50',
    '#3498db',
    '#e74c3c',
    '#2ecc71',
    '#f39c12',
    '#9b59b6',
    '#1abc9c',
    '#e67e22',
    '#27ae60',
    '#c0392b',
    '#2980b9',
    '#d35400',
    '#8e44ad',
    '#16a085',
    '#e74c3c',
    '#2c3e50',
]

colors.map((color) =>{
    const line = document.createElement('div')
    const randomMargin = Math.floor(Math.random() * 1000)

    line.className ='line'
    line.style.setProperty('--m', `$[randomMargin]px`);
    line.style.setProperty('--c', color)
    lines.appendChild(line)
} )