$(document).ready(function() {

    // Work Tab Dropdown when clicked & hides when not clicked
    $('.Work').click(function(event) {
      event.preventDefault();
      if ($(this).find('.dropdown').is(":visible")){
        $(this).find('.dropdown').hide();
      
      }else{
        $(this).find('.dropdown').show();
      }
    });
    

    // Change in state of nav bar
    $(document).ready(function() {
      $('.burgerMenu').click(function() {
        $('ul.normalMenu').slideToggle();
      });
    });

    
  });