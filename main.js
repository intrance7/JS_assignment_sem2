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


const clearBtn = document.querySelector('#clearBtn');
const sampleBtn = document.querySelector('#sampleBtn');

clearBtn.addEventListener('click', function () {
    eventcards.innerHTML = "";
});

sampleBtn.addEventListener('click', function () {

    const sampleEvents = [
        {
            title: "KRMU",
            date: "2026-03-10",
            category: "hackathon",
            description: "hackathon."
        },
        {
            title: "webdev workshop",
            date: "2026-04-15",
            category: "workshop",
            description: "js workshop."
        }
    ];

    sampleEvents.forEach(event => {

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <div class="cardheader">
            <div class="cardheader-top">
                <h2>${event.title}</h2>
                <div class="deletecard">❌</div>
            </div>
            <p>📆 ${event.date}</p>
            <button class="cat-btn">${event.category}</button>
            <p>${event.description}</p>
        </div>
        `;

        card.querySelector('.deletecard').addEventListener('click', function () {
            card.remove();
        });

        eventcards.appendChild(card);
    });

});
