const inputName    = document.querySelector('#input-name');
const inputContact = document.querySelector('#input-contact');
const submitButton = document.querySelector('#submit-button');


submitButton.addEventListener('click', () => {
    let from    = inputName.value;
    let contact = inputContact.value;
    let items   = getInterestedItemsAsString();
    console.log(from + " is interested in " + items + ", contact info: " + contact);
    sendEmail(from, contact, items);
});


function getInterestedItemsAsString(){
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    console.log(checkboxes);
    const interestedChecked = checkboxes.filter( checkbox => checkbox.checked );
    console.log(interestedChecked);
    let interestedItems = interestedChecked.map( checkbox => {
        return checkbox.parentNode.nextSibling.nextSibling.textContent;
    });
    return interestedItems.join(", ");
}


function sendEmail(from, contact, items){
    Email.send({
        SecureToken : 'aff6275e-420b-4980-bad4-e20ff2c206ea',
        To : 'craigostrin@gmail.com',
        From : 'craigostrin@gmail.com',
        Subject : `craigs-list alert from ${from}`,
        Body : `${from} is interested in: ${items}....Contact info: ${contact}`
    }).then(
      message => {
        if (message === "OK") {
            alert("Submitted. Thanks for your interest! I'll be in touch. :)")
        } else {
            alert(message);
        }
      }
    );
}
