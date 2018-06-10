$(document).on('click','#like',function(){
    console.log("hello");
    var post_id = $(this).attr('data-post-id');
    console.log("post id: ",post_id);
    $.post('/likes/'+post_id+'/save_like',function(response){
    	console.log(response);

    });
}); 