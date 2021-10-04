$(document).ready( function (){

  $('.btn').click(function(){
    const isChecked = $('.correct').prop('checked');
      if (!$("input:radio[name='question']").is(":checked")) {
        alert('please select an option')
      } else {
        $('.question').css('display', 'none');
        if (isChecked) {
          $('.correct-answer').css('display', 'block');
        } else {
          $('.incorrect-answer').css('display', 'block');
        }
      }
  });
  
  $('.try-again').click(function(){ 
    $('.incorrect-answer, .correct-answer').css('display', 'none');
    $('.question').css('display', 'block');
  });

});