const title = document.querySelector('#title')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const reset = document.querySelector('#reset')



let count = 0;


plus.addEventListener('click' , ()=>{
    count++
    title.innerHTML = count
})


minus.addEventListener('click' , ()=>{
    count--
    title.innerHTML = count
})


reset.addEventListener('click' , ()=>{
    count = 0
    title.innerHTML = count
})
