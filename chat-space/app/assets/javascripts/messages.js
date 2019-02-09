$(function(){
  function buildHTML(message){
      var messageImage = '';
          if (message.image.url) {
          messageImage = `<img src="${message.image.url}">`;
    }
      var html = `<div class="main__container-content-body">
                    <div class="main__container-content-body-name">
                      <div class="main__container-content-body-name--user">
                        ${message.user_name}
                      </div>
                      <div class="main__container-content-body-name--time">
                        ${message.time}
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                      ${message.content}
                      </p>
                      ${messageImage}
                    </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main__container-content').append(html)
      $('.footer__container-form--message').val('')
      $('.form__mask__image').val('')
      $('.footer__container-form-btn').prop('disabled',false);
      scroll()
    })
    .fail(function(){
      alert('error');
    })
  })
})
