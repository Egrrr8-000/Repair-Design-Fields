let $avatar_wrap = $('.avatar_btn');
let $notifications_wrap = $('.notifications_btn');
var $is_opened_avatar = 0;
var $is_opened_notifications = 0;

$avatar_wrap.on('click', function () {
    $('.avatar_container').toggleClass('show_avtr_optns');
    if ($is_opened_avatar == 0) {
      $is_opened_avatar = 1;
    } else {
      $is_opened_avatar = 0;
    }
    console.log('$is_opened_avatar = ', $is_opened_avatar);
});

$notifications_wrap.on('click', function () {
    $('.notifications_container').toggleClass('show_ntfctns_more');
    if ($is_opened_notifications == 0) {
      $is_opened_notifications = 1;
    } else {
      $is_opened_notifications = 0;
    }
    console.log('$is_opened_notifications = ', $is_opened_notifications);
});



$(document).click( function(event) {
  if (!event.target.classList.contains("avatar_container") &&
      !event.target.classList.contains("avatar_options_mini") &&
      !event.target.classList.contains("avatar_btn") &&
      !event.target.classList.contains("account_img") &&
      !event.target.classList.contains("avatar_options_mini_p") &&
      !event.target.classList.contains("avatar_triangle") &&
      !$('.avatar_options').is(":hover") &&
      $is_opened_avatar == 1) {

    $('.avatar_container').removeClass('show_avtr_optns');
    $is_opened_avatar = 0;
    console.log('sdsdaadafrfrg');
    console.log('$is_opened_avatar = 0;');
  }

  if (!event.target.classList.contains("notifications_container") &&
      !event.target.classList.contains("notifications_mini") &&
      !event.target.classList.contains("notifications_btn") &&
      !event.target.classList.contains("noti_logo") &&
      !event.target.classList.contains("notifications_mini_p") &&
      !event.target.classList.contains("to_notifications") &&
      !$('.notifications_opened').is(":hover") &&
      $is_opened_notifications == 1) {

    $('.notifications_container').removeClass('show_ntfctns_more');
    $is_opened_notifications = 0;
    console.log('sdghdgdhkjhfjkch');
    console.log('$is_opened_notifications = 0;');
  }
});

//$(document).click( function(event) {
//  if($(event.target).closest(".avatar_container").length) return;
//  if (event.classList.contains('avatar_container show_avtr_optns')) {
//	$avatar_wrap.toggleClass('show_avtr_optns');
//  }
//});

// $(document).click( function(event) {
//   if (!$('.notifications_opened').is(":hover")) {
//     console.log('is notifications_opened: hover = false');
//   }
//   else {
//     console.log('is notifications_opened: hover = true');
//   }
//   if ($notifications_wrap.hasClass('show_ntfctns_more')) {
//     console.log('notifications_container hasClass show_ntfctns_more = true');
//   }
//   else {
//     console.log('notifications_container hasClass show_ntfctns_more = false');
//   }
//   if (!$('.notifications_btn').is(":hover")) {
//     console.log('notifications_btn: hover = false');
//   }
//   else {
//     console.log('notifications_btn: hover = true');
//   }
//   if (!$('.title_notifications_opened').is(":hover")) {
//     console.log('title_notifications_opened: hover = false');
//   }
//   else {
//     console.log('title_notifications_opened: hover = true');
//   }
// });
