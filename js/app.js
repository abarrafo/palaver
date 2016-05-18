// TODO: refactor firebase chat code out of admin/app.js -- pk2

$(function() {

    var messagesRef = new Firebase('https://incandescent-heat-275.firebaseio.com/');

    var messageField = $('.chat-input');
    var messageList = $('.chat-window');
    var sendButton = $('.chat-send').hide();

    function scrollChat() {
        $('body').get(0).scrollTop = $('.chat-window').get(0).scrollHeight - 221
    }

    $('.chat-input').on('focus', function() {
        setTimeout(scrollChat, 500);
    }).on('keyup', function() {
        console.log('checking!', $(this).val());
        if ($(this).val() !== '') {
            sendButton.show();
        } else {
            sendButton.hide();
        }
    });

    sendButton.on('click', function() {
      // SUPER DUPE - pk2
      var message = messageField.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
      messagesRef.push({
          name: 'test user',
          text: message
      });
      messageField.val('');
      sendButton.hide();
      scrollChat();
    });

    // LISTEN FOR KEYPRESS EVENT
    messageField.keypress(function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            var message = messageField.val();

            //SAVE DATA TO FIREBASE AND EMPTY FIELD
            messagesRef.push({
                name: 'test user',
                text: message
            });
            messageField.val('');
            sendButton.hide();
        }
    });

    // Add a callback that is triggered for each chat message.
    messagesRef.limitToLast(20).on('child_added', function(snapshot) {
        //GET DATA
        var data = snapshot.val();
        var message = data.text;

        //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
        var messageElement = $('<span class="msg msg-fade-in">');
        messageElement.addClass(data.name == "test user" ? 'from-me' : 'from-them');
        messageElement.text(message);

        //ADD MESSAGE
        messageList.prepend(messageElement)

        scrollChat();
    });
})
