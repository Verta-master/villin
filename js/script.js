//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

$('.sidebar__title').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('sidebar__title--opened');
})
