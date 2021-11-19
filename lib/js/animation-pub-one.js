function toggleSavePub_D(idPub) {
  $('.user_just_saved_it').toggleClass('pub_saved');
  console.log("Произошло сохранение публикации, ID:" +idPub);
}

function toggleGetNotiFromAuthor(idPub) {
  $('.get_noti').toggleClass('noties_gotten');
  console.log("Произошло получение уведомлений от автора публикации, ID:" +idPub);
}

$is_opened_pub_additional_functions = 0;
$opened_pub_additional_functions_id = 0;
function togglePubAdditionalFunctions(idPub) {
  $('.pub_show_full').toggleClass('pub_additional_functions_opened');
  $('.pub_additional_functions_bg').toggleClass('show');
  $('.pub_additional_functions').offset({top:( $('.pub_show_full').offset().top - 30  ), left:( $('.pub_show_full').offset().left + 30  )});
  $is_opened_pub_additional_functions = 1;
  $opened_pub_additional_functions_id = idPub;
  console.log("Открыты дополнительные действия с публикацией, ID:" +idPub);
}
function openNewComplaintForm() {
  // $opened_pub_additional_functions_id
  $('.new_complaint').addClass('show');
  $('.new_complaint').offset({top:( $('.pub_show_full').offset().top - 220  ), left:( $('.pub_show_full').offset().left - 220  )});
}
function shareThePub() {
  // $opened_pub_additional_functions_id
  $('.share_the_pub').addClass('show');
  $('.share_the_pub').offset({top:( $('.pub_show_full').offset().top - 40  ), left:( $('.pub_show_full').offset().left - 220  )});
}

function new_complaint_was_sent() {
  $idPub = $opened_pub_additional_functions_id;
  $('.pub_show_full').toggleClass('pub_additional_functions_opened');
  $('.pub_additional_functions_bg').toggleClass('show');
  $is_opened_pub_additional_functions = 0;
  $opened_pub_additional_functions_id = 0;
  $('.new_complaint').removeClass('show');
  $('.new_complaint textarea').val('');
  alert('Жалоба успешно отправлена, будет проверена когда-то там');
  console.log("Жалоба типо отпрвлена");
}


$(document).on('click', function(e) {
  if ($is_opened_pub_additional_functions == 1) {
    if ($(e.target).hasClass('pub_additional_functions_bg')) {
      $idPub = $opened_pub_additional_functions_id;
      $('.pub_show_full').toggleClass('pub_additional_functions_opened');
      $('.pub_additional_functions_bg').toggleClass('show');
      $is_opened_pub_additional_functions = 0;
      $opened_pub_additional_functions_id = 0;
      $('.new_complaint').removeClass('show');
      $('.share_the_pub').removeClass('show');
      console.log("Закрылись дополнительные действия с публикацией, ID:" +$idPub);
    }
  }
});

$(window).scroll(function () {
  if ($is_opened_pub_additional_functions == 1) {
    $idPub = $opened_pub_additional_functions_id;
    $('.pub_show_full').toggleClass('pub_additional_functions_opened');
    $('.pub_additional_functions_bg').toggleClass('show');
    $is_opened_pub_additional_functions = 0;
    $opened_pub_additional_functions_id = 0;
    $('.new_complaint').removeClass('show');
    $('.share_the_pub').removeClass('show');
    console.log("Дополнительные действия с публикацией закрылись :3, ID:" +$idPub);
  }
});
