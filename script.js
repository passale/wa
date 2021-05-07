WA.sendChatMessage('Hello world', 'Mr Robot');
WA.onChatMessage((message => {
    console.log('The user typed a message', message);
}));