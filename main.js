const form = document.querySelector('#form');
const eventcards = document.querySelector('.cards');
form.addEventListener('submit', function(event) {

    event.preventDefault();
    console.log('Form submitted');
    console.log(eventtitle.value); 
    console.log(eventdate.value);
    console.log(category.value);
    console.log(description.value);
   
    event.preventDefault();
    const title = eventtitle.value;
    const date = eventdate.value;
    const cat = category.value;
    const des = description.value;

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="cardheader">
        <div class="cardheader-top">
            <h2>${title}</h2>
            <div class="deletecard">❌</div>
        </div>
        <p>📆 ${date}</p>
        <button class="cat-btn">${cat}</button>
        <p>${des}</p>
    </div>
    `;


    card.querySelector('.deletecard').addEventListener('click', function() {
        card.remove();
    });
    eventcards.appendChild(card);
}) 

document.addEventListener('keydown',(event)=>{
    document.querySelector('.key').innerText=event.key
})