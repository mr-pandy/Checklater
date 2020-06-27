let count = 0;
const btns = document.querySelectorAll('.button-container .btn');
const value = document.querySelector('#value');

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        var currentTarget = e.currentTarget.classList;
        if(currentTarget.contains('decrease')){
            value.textContent = count--;
            value.style.color = 'red';
        }else if(currentTarget.contains('increase')){
            value.textContent = count++;
            value.style.color = 'green';
        }else{
           count = 0;
           value.style.color = 'hsl(209, 61%, 16%)';
        }
        value.textContent = count;
})
}

)