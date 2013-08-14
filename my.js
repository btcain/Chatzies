if (localStorage.length >= 1){
$('#nameInput').val(localStorage.getItem("Name"))
console.log("Got your name back!");
};
  // Get a reference to the root of the chat data.
  var messagesRef = new Firebase('https://randomroom.firebaseio.com/');

  // When the user presses enter on the message input, write the message to firebase.
  $('#sender').click(function (e) {
    console.log("Working?");
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      messagesRef.push({name:name, text:text});
      $('#messageInput').val('');
  });
  
$('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      messagesRef.push({name:name, text:text});
      $('#messageInput').val('');
    }
  });
  

  // Add a callback that is triggered for each chat message.
  messagesRef.limit(10).on('child_added', function (snapshot) {
    var message = snapshot.val();
    $('<li/>').text(message.text).prepend($('<b/>')
      .text(message.name+': ')).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
  });
  
  function saveName(){
  myName = $('#nameInput').val();
  localStorage.setItem("Name", myName);
  console.log("Name saved! I think..");
  };