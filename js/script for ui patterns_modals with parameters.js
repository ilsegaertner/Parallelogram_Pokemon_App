//script for UI Patterns 
// modals in IIFE and with parameters

(function() {

  // query-selector of #modal-container // defined outside of the functions
  let modalContainer = document.querySelector ('#modal-container');

  // showModal 
  function showModal (title, text) {

    //clear html content of modal-container
    modalContainer.innerHTML = '';
    // add div
    let modal = document.createElement ('div');
    // add classList modal
    modal.classList.add('modal');

    // add the new modal content
    // add titleElement
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
    // add text (paragraph)/contentElement
    contentElement = document.createElement ('p');
    contentElement.innerText = text;

    // add closeButtonElement
    let closeButtonElement = document.createElement ('button');     
    closeButtonElement.classList.add ('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener ('click', hideModal); // hides the modal with the hideModal function stated earlier 

        //--> first: create the button in the script through document.createElement and assign a variable to it
        //--> then: add the class and style its appearance via css
        //--> define the text inside the button via javascript
        //--> make it do sth when clicking on it via .addEventListener and a stated function

    // append the modal content
    modal.appendChild(closeButtonElement); // class.appendChild(designated variable)
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal); // id.appendChild(class)

    modalContainer.classList.add ('is-visible');
  }

   // hideModal 
   function hideModal () {
    modalContainer.classList.remove ('is-visible');
  }

  // exit modal on keydown Escape
  window.addEventListener('keydown', (e) => {
    if (e.key == 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  
  // Exit modal when the user clicks outside of the modal
  modalContainer.addEventListener('click', (e) => {
              // Since this is also triggered when clicking INSIDE the modal
              // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) { //This code listens for clicks on the container in particular (i.e., <div id='modal-container'></div>). 
      hideModal();
    }
  });

  // add eventListener for showModal
  document.querySelector('#showModal').addEventListener ('click', () => {
  showModal ('Modal title', 'This is the modal content'); // Here you enter the text that should be visible as h1 and p in the modal
  }); 

  // THE RETURN STATEMENT HERE
})();