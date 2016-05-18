// WELCOME TO SCRAPPY TOWN.

$(function() {

    $('.content-for-copying').on('click', function() {
        $(this).css('background-color', '#FFFBCC').animate({
            backgroundColor: '#FFFFFF'
        }, 500);

        $('.chat-input').val( $(this).text() ).focus();
    });

    // pulled straight from firebase demo, tweaked for our app
    // CREATE A REFERENCE TO FIREBASE
    var messagesRef = new Firebase('https://incandescent-heat-275.firebaseio.com/');

    $('#clear_chat').on('click', function(){
        messagesRef.remove();
    });

    // REGISTER DOM ELEMENTS
    var messageField = $('.chat-input');
    var messageList = $('.admin-chat');

    // LISTEN FOR KEYPRESS EVENT
    messageField.keypress(function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            var message = messageField.val();

            //SAVE DATA TO FIREBASE AND EMPTY FIELD
            messagesRef.push({
                name: 'admin',
                text: message,
                timestamp: Date.now()
            });
            messageField.val('');
        }
    });

    // Add a callback that is triggered for each chat message.
    messagesRef.on('child_added', function(snapshot) {
        //GET DATA
        var data = snapshot.val();
        var message = data.text;

        //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
        var messageElement = $('<span class="msg msg-fade-in">');
        messageElement.addClass(data.name == "admin" ? 'chat-me' : 'chat-them');
        messageElement.text(message);

        //ADD MESSAGE
        messageList.prepend(messageElement)

        //SCROLL TO BOTTOM OF MESSAGE LIST
        // messageList[0].scrollTop = messageList[0].scrollHeight;
    });

});
