//object to create block function scope
var maat = {

  /**
   * Function that is called upon DOM page-load for basic element adjustments in this case
   */
  setup: function() {
    var sliderImgHeight = $( "#img-height" ).height(); //gets the image height of one image in the slider

    //checks if dots are there, if so, sets position of dots based on image size
    if ( $( ".dots" ) ) {
      $( ".dots" ).css("top", (sliderImgHeight * 0.9) + "px");
    }

    $('audio').prop("volume", 0.5); //sets default volume of audio element to half
  },
};
