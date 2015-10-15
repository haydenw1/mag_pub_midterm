//object to create block function scope
var maat = {
  selected: "ryan", //property to keep track of the currect selected student...defaults to Ryan Walsh

  /**
   * Function that is called upon DOM page-load--attaches 'click' event listener (which also functions
   * as touch) to the buttons that the user can pick from.
   */
  setup: function() {
    $( '.student-button' ).on( "click", function(){
      //if this is not the current selection
      if(this.id != maat.selected) {
        maat.switchThings(this); //run the switch function
      }
    });
  },

  /**
   * Function that is called when a user makes a selection of a student button. Uses the main
   * data object ('data.js') to switch the student data and paragraphs out (dependent on the id
   * that is attached to the <div> that is pressed--used first name of student as id).
   * @param  {object} touched Button <div> that is touched by the user
   */
  switchThings: function(touched) {
    var divsToSwitch = ($( ".switch" )); //selects switch divs
    var studentData = data[touched.id]; //records id of touched button (student name)

    $( ".switch" ).empty(); //empties all divs that hold paragraphs to be changed.

    //for every paragraph the student wrote for question one, calls 'makePara' function
    for(a = 0; a < studentData.one.length; a++) {
      maat.makePara(divsToSwitch[0], studentData.one[a]);
    }

    //for every paragraph the student wrote for question two, calls 'makePara' function
    for(b = 0; b < studentData.two.length; b++) {
      maat.makePara(divsToSwitch[1], studentData.two[b]);
    }

    //for every paragraph the student wrote for question three, calls 'makePara' function
    for(c = 0; c < studentData.three.length; c++) {
      maat.makePara(divsToSwitch[2], studentData.three[c]);
    }

    //changes student name and details
    $( ".student-name").html(studentData.name);
    $( ".year-level" ).html("<span class='in-text-title'>Year Level: </span>" + studentData.yl);
    $( ".random-fact" ).html("<span class='in-text-title'>Random Fact: </span>" + studentData.rf);
    $( ".dream-job" ).html("<span class='in-text-title'>Dream Job: </span>" + studentData.dj);

    //fades out old student image..when complete > switches src to new one, and then fades back in
    $( "#image" ).stop().fadeTo( "fast", 0, function() {
      $( "#image" ).attr("src", "assets/photos/" + touched.id + ".jpg");
      $( "#image" ).stop().fadeTo( "slow", 1);
    });

    touched.src = "assets/buttons/selected.jpg"; //switches newly selected button to "selected.jpg" (arrow)
    touched.className = "student-button"; //changes class of selected button (to remove small shadow)

    //returns previously selected button to unselected state
    $( "#"+ maat.selected )
      .attr("src", "assets/buttons/" + maat.selected + ".jpg")
      .attr("class", "student-button floaty");

    //records the new selection
    maat.selected = touched.id;

  },

  /**
   * Appends a <p> tag in the passed div with the passed student data
   * @param  {object} div  Object (div) where we will append <p> tag
   * @param  {string} data Data string from main data object--in this case it is
   *                       a paragraph of a student's answer to one of the questions
   */
  makePara: function(div, data) {
    $( div ).append( "<p>" + data + "</p>");
  }
};
