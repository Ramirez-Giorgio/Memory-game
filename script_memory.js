const board = document.getElementById('game-board');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

const cardArray = [
    { name: 'nature', img: 'https://picsum.photos/id/10/200/200' },
    { name: 'nature', img: 'https://picsum.photos/id/10/200/200' },
    { name: 'city', img: 'https://picsum.photos/id/103/200/200' },
    { name: 'city', img: 'https://picsum.photos/id/103/200/200' },
    { name: 'sea', img: 'https://picsum.photos/id/1011/200/200' },
    { name: 'sea', img: 'https://picsum.photos/id/1011/200/200' },
    { name: 'mountain', img: 'https://picsum.photos/id/1015/200/200' },
    { name: 'mountain', img: 'https://picsum.photos/id/1015/200/200' },
    { name: 'tech', img: 'https://picsum.photos/id/160/200/200' },
    { name: 'tech', img: 'https://picsum.photos/id/160/200/200' },
    { name: 'forest', img: 'https://picsum.photos/id/1043/200/200' },
    { name: 'forest', img: 'https://picsum.photos/id/1043/200/200' },
    { name: 'architecture', img: 'https://picsum.photos/id/1040/200/200' },
    { name: 'architecture', img: 'https://picsum.photos/id/1040/200/200' },
    { name: 'animals', img: 'https://picsum.photos/id/1074/200/200' },
    { name: 'animals', img: 'https://picsum.photos/id/1074/200/200' }
];

cardArray.sort(() => 0.5 - Math.random());

function createBoard() {
    board.innerHTML = ''; 
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('data-id', i);
        card.style.backgroundImage = `url(${cardArray[i].img})`;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    if (!cardsChosenId.includes(cardId) && cardsChosen.length < 2) {
        this.classList.add('flipped');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].classList.add('matched');
        cards[optionTwoId].classList.add('matched');
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].classList.remove('flipped');
        cards[optionTwoId].classList.remove('flipped');
    }
    cardsChosen = [];
    cardsChosenId = [];

    if (cardsWon.length === cardArray.length / 2) {
        alert('Hai vinto!');
    }
}

createBoard();
