$(document).ready(function () {
  $("button.liked,button.unlike").click(function () {
    const parent =  $(this).parent('.like');
    parent.children().toggle();
  });
});
