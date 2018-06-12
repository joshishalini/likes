$(document).on('click','.like',function(){
    console.log("hello");
    var post_id = $(this).attr('data-post-id');
    console.log("post id: ",post_id);
    $.post('/likes/'+post_id+'/save_like',function(response){
    	console.log(response);
    	$('#'+post_id).attr('disabled','disabled');
      $('#'+post_id).children().addClass('red');
      $('#'+post_id).children().removeClass('grey');
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
	$('.popup').append('<div class="alert alert-success"><strong>Hey '+from.from+' liked your post.</strong></div>');
}