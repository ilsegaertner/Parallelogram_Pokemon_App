//script for UI Patterns 
// modals

(function () {

function showModal(title,text) {
    let modalContainer = document.querySelector ('#modal-container');

    // Clear all existing modal content
    modalContainer.innerHTML = '';  //erases the entire contents of the #modalcontainer

    let modal = document.createElement('div');
    modal.classList.add('modal');

    //Add the new modal content

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';

    let titleElement = document.createElement('h1');
    titleElement.innerText = title

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);



    modalContainer.classList.add ('is-visible');
}

document.querySelector('#show-modal').addEventListener('click', () => {
    showModal ('Modal title', 'This is the modal content');
});

//The Return statement here

})();