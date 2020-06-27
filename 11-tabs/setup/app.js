const getButton = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articleContent = document.querySelectorAll('.content');

about.addEventListener('click',(e)=>{
    const id = e.target.dataset.id;
    if(id){
        getButton.forEach((button)=>{
            button.classList.remove('active');
            e.target.classList.add('active')
        })
        //Hide other articles
        articleContent.forEach((article)=>{
            article.classList.remove('active');
            const element = document.getElementById(id);
            element.classList.add('active');
        })
    }
    
})
