//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

//Sidebar
$('.sidebar__title').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('sidebar__title--opened');
})

$('.sidebar__catalog').click(function() {
  $('.sidebar__filter').slideToggle();
})
