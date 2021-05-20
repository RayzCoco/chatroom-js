//DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//add a new chat
newChatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message).then((message) => {
        newChatForm.reset();
    }).catch((err) => {
        console.log(err);
    });
});

//update username
newNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //update name via chatroom class
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //reset form
    newNameForm.reset();
    //show then hide update message
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => {
        updateMssg.innerText = '';
    }, 3000);
});

//update rooms
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => {
            chatUI.render(chat)
        });
    }
});

//check local storage
const username = localStorage.username ? localStorage.username : 'anon' ;

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

//get chats and render
chatroom.getChats((data) => {
    chatUI.render(data);
});

//rest parameter (we dont know how many parameter to pass) turn to array
const double = (...nums) => {
    return nums.map(num => num*2);
}
const result = double(1,2,3,4,5,6,7);
console.log(result);

//spread syntax array
const people = ['nico', 'ryu', 'me'];
const members = ['felicia', 'ninja', ...people]
console.log(members);

//spread for object
const person = {name: 'Nico', age: 30, job: 'net ninja'};
const personClone = {...person, location: 'manchester'};

console.log(personClone);

//set
const name2 = ['nico', 'nico', 'ryu', 'janice'];
const namesSet = new Set(name2);

console.log(namesSet);