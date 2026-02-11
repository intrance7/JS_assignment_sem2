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
        <h2>${title}</h2>
        <p>📆${date}</p>
        <button>${cat}</button>
        <p>${des}</p>
        <div class="deletecard">❌</div>
    `;

    card.querySelector('.deletecard').addEventListener('click', function() {
        card.remove();
    });
    eventcards.appendChild(card);
}) 

document.addEventListener('keydown',(event)=>{
    document.querySelector('.key').innerText=event.key
})