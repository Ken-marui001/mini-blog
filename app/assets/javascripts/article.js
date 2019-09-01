$(function(){

  function showArticleHTML(article){
    html = `
    <div class="article-view">
    <div class="article-view__title">
    <h1>
    ${article.title}
    </h1>
    </div>
    <div class="article-view__image">
    <img src=${article.image.url}>
    </div>
    <div class="article-view__content">
    ${article.content}
    </div>
    </div>`

    $('.cover-layer').append(html);
  }

  $(document).on('click', ".article", function(){
    let article_id = $(this).data('id');
    let url = `/articles/${article_id}`;
    console.log(url);

    $.ajax({
      type: 'get',
      url: url,
      data: {'id': article_id},
      dataType: 'json'
    })
    .done(function(article){
      $(".cover-layer").empty();
      $(".cover-layer").addClass('visible');
      showArticleHTML(article);
    })
    .fail(function(){

    });
  });

  $(document).on('click', ".cover-layer", function(){
    $(this).removeClass('visible');
  });
});
