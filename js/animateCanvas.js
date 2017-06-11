$("#show-animation").change(function () {
  if ( $(this).is(":checked") ) {
    $("#header-canvas").show();
  }
  else {
    $("#header-canvas").hide();
  }
