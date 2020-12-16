import {getUnitedStatesObj} from './united-states.js';
const unitedStatesObj = getUnitedStatesObj();
const main = document.querySelector('main');
const header = document.querySelector('header');
const nav = document.querySelector('nav');

function createNav() {   
    let navList = document.createElement('ul');
    navList.className = 'nav-list';
    const navNum = 4;
    nav.id = 'navbar';
    
    
    let listItemArr = [];
    let navItemArr = [];
    for(let i = 0; i < navNum; i++) {
        listItemArr[i] = document.createElement('li');
        navItemArr[i] = document.createElement('a');
        listItemArr[i].appendChild(navItemArr[i]);
        navList.appendChild(listItemArr[i]);
    }
    
    navItemArr[0].href = '#welcome';
    navItemArr[0].textContent = 'Welcome';
    navItemArr[1].href = '#projects';
    navItemArr[1].textContent = 'Projects';
    navItemArr[2].href = '#description';
    navItemArr[2].textContent = 'Description';
    navItemArr[3].href = '#states';
    navItemArr[3].textContent = 'States';
    
    nav.appendChild(navList);
}

createNav();

//Start of States code
const states = document.querySelector('#states');
const arrLength = unitedStatesObj.state.stateName.length;

function populateStateCard() {
    for(let i = 0; i < arrLength; i++) {
        let stateScene = document.createElement('div');
        stateScene.className = 'scene';
        let stateCard = document.createElement('div');
        stateCard.className = 'card';
        
        stateCard.appendChild(populateStateCardFront(i));
        stateCard.appendChild(populateStateCardBack(i));

        stateCard.addEventListener('click', () => {
            if(stateCard.children[0].innerText == 'Iowa') {
                alert('Aha! So you do know where corn comes from? Well done.');
                alert('The final hidden feature is a word search in the lorem ipsum paragraphs above. There are 10 hidden links within the text. \(Hint: Not all links are words\)');
            }
            stateCard.classList.toggle('is-flipped');
        })

        stateScene.appendChild(stateCard);
        states.appendChild(stateScene);
    }
}

function populateStateCardFront(index) {
    let cardFront = document.createElement('div');
    let frontLabel = document.createElement('h3');
    let frontImage = document.createElement('img');
    
    cardFront.className = `card_face card_face_front`;
    frontLabel.textContent = unitedStatesObj.state.stateName[index];
    frontImage.src = `flags/${formateImgUrl(unitedStatesObj.state.stateName[index])}-small.png`;
    cardFront.appendChild(frontImage);
    cardFront.appendChild(frontLabel);
    return cardFront;
}

function populateStateCardBack(index) {
    let cardBack = document.createElement('div');
    cardBack.className = `card_face card_face_back`;

    let backLabelHeader = document.createElement('h3');
    backLabelHeader.textContent = unitedStatesObj.state.stateName[index];
    cardBack.appendChild(backLabelHeader);

    let capitalLabel = document.createElement('p');
    capitalLabel.textContent = `Capital: ${unitedStatesObj.state.capital[index]}`;
    cardBack.appendChild(capitalLabel);

    let foundingDateLabel = document.createElement('p');
    foundingDateLabel.textContent = `Joined the Union on: ${unitedStatesObj.state.foundingDate[index]}`;
    cardBack.appendChild(foundingDateLabel);
    
    return cardBack;
}

function formateImgUrl(name) {
    if(name.includes(' ')) {
        let spaceIndex = name.indexOf(' ');
        name = name.substring(0,spaceIndex)+'-'+name[spaceIndex+1].toLowerCase()+name.substring(spaceIndex+2);
    }
    return name[0].toLowerCase()+name.substring(1);
}

populateStateCard();



