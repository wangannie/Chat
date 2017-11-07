var config = {
  apiKey: "AIzaSyAjmLIA0_OL7XdN8mmGOUfv_vPk5VlYjbE",
  authDomain: "chat-fa282.firebaseapp.com",
  databaseURL: "https://chat-fa282.firebaseio.com",
  projectId: "chat-fa282",
  storageBucket: "",
  messagingSenderId: "755666924850"
};
firebase.initializeApp(config);

var chatData = firebase.database().ref();

function pushMessage(event) {
  if (event.keyCode == 13) {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    chatData.push({name: name, text: text});
    $('#messageInput').val('');
  }
}
$('#messageInput').keypress(pushMessage);
chatData.on("child_added", showMessage);

function showMessage(msg){
  var message = msg.val();
  var messageSender = message.name;
  var messageContent = message.text;

  var messageE1 = $("<div/>").addClass("message");
  var senderE1 = $("<span/>").text(messageSender + ": ");
  var contentE1 = $("<span/>").text(messageContent);

  messageEl.append(senderEl);
messageEl.append(contentEl);
$('#messages').append(messageEl);
}
