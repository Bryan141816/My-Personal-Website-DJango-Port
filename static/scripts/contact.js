$(document).ready(function() {
  $('input').focus(function() {
      $('.messages').remove();
  });
});