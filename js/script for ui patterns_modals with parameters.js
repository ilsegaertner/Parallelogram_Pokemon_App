




(function() {

  function showModal (title, text) {

    // query-selector of #modal-container
    let modalContainer = document.querySelector ('#modal-container');
    
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
  

    // you need to append the modal content

    modal.appendChild(closeButtonElement); // class.appendChild(designated variable)
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal); // id.appendChild(class)


  }

// add eventListener

function.addEventListener ('click', (e) => ()); 

})