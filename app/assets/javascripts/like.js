$(document).on('click','#like',function(){
    console.log("hello");
    var post_id = $(this).attr('data-post-id');
    console.log("post id: ",post_id);
    $.post('/likes/'+post_id+'/save_like',function(response){
    	console.log(response);
    	$('#like').attr('disabled','disabled');
    	$('#like').html('Liked');
    });
}); 

$(document).ready(function(){
	console.log(w3sockets_key);
	console.log("current_user", current_user);
  w3socket = new W3sockets(w3sockets_key);
  channel = w3socket.subscribe('like');
  channel.bindEvent('event-name-'+current_user, function() {
  	console.log("111111111111111111111111");
  });
});