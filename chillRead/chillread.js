const filtterButton = document.querySelectorAll('.filter-btn');
const blodCard = document.querySelectorAll('.blog-card');

filtterButton.forEach(button =>{
    button.addEventListener('click',()=>{
        const filter = button.getAttribute('data-filter');

        blodCard.forEach(card =>{
            const catagory = card.getAttribute('data-category');

            if(filter=='all' || catagory==filter){
                card.style.display ='flex'
            }
            else{
                card.style.display = 'none'
            }
        })
    })
})