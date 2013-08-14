if (localStorage.length >= 1){
$('#nameInput').val(localStorage.getItem("Name"))
console.log("Got your name back!");
};
var cRoom = "randomz";

  // Get a reference to the root of the chat data.
  var messagesRef = new Firebase('https://randomroom.firebaseio.com/');

  //RANDOMZ CHATROOM---------------------------------------
  
  // When the user presses enter on the message input, write the message to firebase.
  $('#sender').click(function (e) {
    console.log("Working?");
	 var cRoom = "randomz";
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      messagesRef.push({name:name, text:text, room:cRoom});
      $('#messageInput').val('');
  });
  
$('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
	var cRoom = "randomz";
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      messagesRef.push({name:name, text:text, room:cRoom});
      $('#messageInput').val('');
    }
  });
  //--------END RANDOMZ CHATROOM-----------------
  
  //---------Test Chatroom ----------------

    $('#tSender').click(function (e) {
    console.log("Working?");
	 var cRoom = "testRoom";
      var name = $('#nameInput').val();
      var text = $('#tMessageInput').val();
      messagesRef.push({name:name, text:text, room:cRoom});
      $('#tMessageInput').val('');
  });
  
$('#tMessageInput').keypress(function (e) {
    if (e.keyCode == 13) {
	var cRoom = "testRoom";
      var name = $('#nameInput').val();
      var text = $('#tMessageInput').val();
      messagesRef.push({name:name, text:text, room:cRoom});
      $('#tMessageInput').val('');
    }
  });
  
  //----- END TEST CHATROOM -------
  
  
  // Add a callback that is triggered for each chat message.
  messagesRef.limit(10).on('child_added', function (snapshot) {
    var message = snapshot.val();
	if (message.room === "randomz"){
    $('<li/>').text(message.text).prepend($('<b/>')
      .text(message.name+': ')).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
	}
	if (message.room === "testRoom"){
    $('<li/>').text(message.text).prepend($('<b/>')
      .text(message.name+': ')).appendTo($('#tMessagesDiv'));
    $('#tMessagesDiv')[0].scrollTop = $('#tMessagesDiv')[0].scrollHeight;
	}
  });
  
  
  
  function saveName(){
  myName = $('#nameInput').val();
  localStorage.setItem("Name", myName);
  console.log("Name saved! I think..");
  };