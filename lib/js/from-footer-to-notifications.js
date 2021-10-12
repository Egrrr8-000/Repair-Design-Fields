let $to_notifications = $('.to_notifications');
let $notifications_wrap = $('.notifications_container');

$to_notifications.on('click', function () {
  $("html, body").stop().animate( {
    scrollTop: 0
  }, 1200);
  $notifications_wrap.toggleClass('show_ntfctns_more');
});
