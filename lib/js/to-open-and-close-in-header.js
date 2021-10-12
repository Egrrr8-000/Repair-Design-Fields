let $avatar_wrap = $('.avatar_container');
let $notifications_wrap = $('.notifications_container');

$avatar_wrap.on('click', function () {
    $avatar_wrap.toggleClass('show_avtr_optns');
});

$notifications_wrap.on('click', function () {
    $notifications_wrap.toggleClass('show_ntfctns_more');
});
