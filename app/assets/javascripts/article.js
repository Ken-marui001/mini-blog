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

  $(document).on({
    'mouseenter': function(){
      let index = $(".article__image").index(this);
      $($(".article-ope")[index]).css('visibility', 'visible');
    },
    'mouseleave': function(){
      let index = $(".article__image").index(this);
      $($(".article-ope")[index]).css('visibility', 'hidden');
    }
  }, ".article__image");

  $(document).on('click', ".article-ope .check-delete", function(){
    let article_id = $(this).data('id');
    let url = `/articles/${article_id}`;
    console.log(url);
    result = confirm("投稿を削除しますか?");
    if(result){
      $.ajax({
        url: url,
        type: 'delete'
        // data: {'id': article_id}
      }).fail(function(){
        alert('server error');
      });
    }
  })

});
