$(function(){
  $(".article").on('click', function(){
    let article_id = $(this).data('id');
    let url = `/articles/${article_id}`;
    console.log(url);

    $.ajax({
      type: 'get',
      url: url,
      dataType: 'json'
    })
    .done(function(article){

    })
    .fail(function(){

    });
  });
});
