
function gameStartButton() {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', startGame);

}

function elementCreator(whatDiv, whatElement, storyContent) {
    const element = document.createElement(whatElement);
    document.querySelector(whatDiv).append(element);
    element.innerText = storyContent;
    return element;
}

function createEvent(buttonElement, whatFunction) {

       buttonElement.addEventListener('click', whatFunction);
}

gameStartButton()

function startGame() {
    document.querySelector('.startContainer').innerHTML = '';
    elementCreator('.startContainer', 'p', storyContent.startGame);
    let nameInput = elementCreator('.startContainer', 'input')
    let doneButton = elementCreator('.startContainer', 'button', storyContent.doneButton);
    createEvent(doneButton, afterPlayerEnteredName);
}

function afterPlayerEnteredName() {
    document.querySelector('.startContainer').innerHTML = '';
    elementCreator('.startContainer', 'p', storyContent.playerChoiceGender);
    let boy = elementCreator('.startContainer', 'button', storyContent.genderBoy);
    let girl = elementCreator('.startContainer', 'button', storyContent.genderGirl);
    createEvent(boy, choicePet);
    createEvent(girl, choicePet);
}

function choicePet() {
    document.querySelector('.startContainer').innerHTML = '';
    elementCreator('.startContainer', 'p', storyContent.playerChoicePet);
    let cat =  elementCreator('.startContainer', 'button', storyContent.buttonCat);
    let dog = elementCreator('.startContainer', 'button', storyContent.buttonDog);
    createEvent(cat, completedCharacter);
    createEvent(dog, completedCharacter);
}

function completedCharacter() {
    document.querySelector('.startContainer').innerHTML = '';
    elementCreator('.startContainer', 'p', storyContent.showPlayersChoices);
}



