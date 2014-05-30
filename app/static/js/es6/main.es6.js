'use strict';

// $(document).ready(function() {
//
// });

$(document).ready(initialize);

function initialize() {
  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');
  sideslider.click(function(event){
    $(sel).toggleClass('in');
    $(sel2).toggleClass('out');
  });

  //$('#update').click(update);
}

// function update() {
//   var value = document.getElementById('input1').value;
//   document.getElementById('input1').innerHTML = value;
//   // var value = $('.input').val();
//   // $('#input1').val() = value;
// }
