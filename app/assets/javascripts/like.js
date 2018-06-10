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
  w3socket = new W3sockets(w3sockets_key);
  channel = w3socket.subscribe('like');
  channel.bindEvent('event-name-'+current_user, function(from) {
  	console.log("111111111111111111111111");
  	console.log(from);
  	open_popup(from);
  });
});


function open_popup(from){
	$('.popup').append('<div class="alert alert-warning alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Hey ',from.from,' liked your post.</strong></div>');
}