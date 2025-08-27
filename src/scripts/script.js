// page elements
const btnsPanel = [...document.querySelectorAll('button')];
const cardsContainer = document.querySelector('.cardsContainer');

// request data
async function populate() {
    const requestURL = './data.json';

    const request = new Request(requestURL);

    const response = await fetch(request);

    const data = await response.json();

    populateCards(data);
}

function populateCards(data) {
    populateCardsWeekly(data);

    btnsPanel.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target;

            switch(target.id) {
                case 'daily':
                    changeSelectedOption(btnsPanel, target);
                    populateCardsDaily(data);
                    break;
                case 'weekly':
                    changeSelectedOption(btnsPanel, target);
                    populateCardsWeekly(data);
                    break;
                case 'monthly':
                    changeSelectedOption(btnsPanel, target);
                    populateCardsMonthly(data);
                    break;
            }
        });
    });
}

function populateCardsDaily(data) {
    if(cardsContainer.innerHTML !== "") {
        const cards = [...cardsContainer.children];
        cards.forEach(card => {
            card.remove();
        })
    }

    for(const d of data) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('cardContainer');
        cardContainer.classList.add(d.title.toLowerCase().replace(" ", ""));
        
        const cardContent = document.createElement('div');
        cardContent.classList.add('cardContent');

        const cardHeader = document.createElement('header');
        cardHeader.classList.add('cardHeader');

        const h2 = document.createElement('h2');
        h2.textContent = d.title;
        
        const img = document.createElement('img');
        img.setAttribute('src', './src/images/icon-ellipsis.svg');
        img.setAttribute('alt', 'Options icon');

        cardHeader.append(h2, img);

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('cardFooter');

        const pTime = document.createElement('p');
        pTime.classList.add('time');
        pTime.textContent = `${d.timeframes.daily.current}hrs`;

        const pLastRecord = document.createElement('p');
        pLastRecord.classList.add('lastRecord');
        pLastRecord.textContent = `Last day - ${d.timeframes.daily.previous}hrs`

        cardFooter.append(pTime, pLastRecord);
        cardContent.append(cardHeader, cardFooter);
        cardContainer.appendChild(cardContent);
        
        cardsContainer.appendChild(cardContainer);
    }
}

function populateCardsWeekly(data) {
    if(cardsContainer.innerHTML !== "") {
        const cards = [...cardsContainer.children];
        cards.forEach(card => {
            card.remove();
        })
    }

    for(const d of data) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('cardContainer');
        cardContainer.classList.add(d.title.toLowerCase().replace(" ", ""));
        
        const cardContent = document.createElement('div');
        cardContent.classList.add('cardContent');

        const cardHeader = document.createElement('header');
        cardHeader.classList.add('cardHeader');

        const h2 = document.createElement('h2');
        h2.textContent = d.title;
        
        const img = document.createElement('img');
        img.setAttribute('src', './src/images/icon-ellipsis.svg');
        img.setAttribute('alt', 'Options icon');

        cardHeader.append(h2, img);

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('cardFooter');

        const pTime = document.createElement('p');
        pTime.classList.add('time');
        pTime.textContent = `${d.timeframes.weekly.current}hrs`;

        const pLastRecord = document.createElement('p');
        pLastRecord.classList.add('lastRecord');
        pLastRecord.textContent = `Last week - ${d.timeframes.weekly.previous}hrs`

        cardFooter.append(pTime, pLastRecord);
        cardContent.append(cardHeader, cardFooter);
        cardContainer.appendChild(cardContent);
        
        cardsContainer.appendChild(cardContainer);
    }
}

function populateCardsMonthly(data) {
    if(cardsContainer.innerHTML !== "") {
        const cards = [...cardsContainer.children];
        cards.forEach(card => {
            card.remove();
        })
    }
    
    for(const d of data) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('cardContainer');
        cardContainer.classList.add(d.title.toLowerCase().replace(" ", ""));
        
        const cardContent = document.createElement('div');
        cardContent.classList.add('cardContent');

        const cardHeader = document.createElement('header');
        cardHeader.classList.add('cardHeader');

        const h2 = document.createElement('h2');
        h2.textContent = d.title;
        
        const img = document.createElement('img');
        img.setAttribute('src', './src/images/icon-ellipsis.svg');
        img.setAttribute('alt', 'Options icon');

        cardHeader.append(h2, img);

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('cardFooter');

        const pTime = document.createElement('p');
        pTime.classList.add('time');
        pTime.textContent = `${d.timeframes.monthly.current}hrs`;

        const pLastRecord = document.createElement('p');
        pLastRecord.classList.add('lastRecord');
        pLastRecord.textContent = `Last month - ${d.timeframes.monthly.previous}hrs`

        cardFooter.append(pTime, pLastRecord);
        cardContent.append(cardHeader, cardFooter);
        cardContainer.appendChild(cardContent);
        
        cardsContainer.appendChild(cardContainer);
    }
}

function changeSelectedOption(btns, target) {
    btns.forEach(btn => {
        btn.classList.remove('selected-button');
    })

    target.classList.add('selected-button');
}

populate();