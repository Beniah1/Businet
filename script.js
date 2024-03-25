$(document).ready(function() {
    $('.nav-link').click(function() {
      // Remove active class from all tabs
      $('.tab-pane').removeClass('show active');
  
      // Add active class to the clicked tab and its content
      var tabTarget = $(this).attr('href');
      $(tabTarget).addClass('show active');
  
      // Remove active class from all navigation links
      $('.nav-link').removeClass('active');
  
      // Add active class to the clicked navigation link
      $(this).addClass('active');
    });
  });