var maat = {
  selected: "ryan",

  setup: function() {
    console.log(data);
    console.log("coleslaw");

    $( '.student-button' ).on( "click", function(){
      if(this.id != maat.selected) {
        maat.switchThings(this);
      }
    });
  },

  switchThings: function(touched) {
    var divsToSwitch = ($(".switch"));
    var studentData = data[touched.id];

    $( ".switch" ).empty();

    for(a = 0; a < studentData.one.length; a++) {
      maat.makePara(divsToSwitch[0], studentData.one[a]);
    }

    for(b = 0; b < studentData.two.length; b++) {
      maat.makePara(divsToSwitch[1], studentData.two[b]);
    }

    for(c = 0; c < studentData.three.length; c++) {
      maat.makePara(divsToSwitch[2], studentData.three[c]);
    }

    $( ".student-name").html(studentData.name);
    $( ".random-fact" ).html("<span class='in-text-title'>Random Fact: </span>" + studentData.rf);
    $( ".dream-job" ).html("<span class='in-text-title'>Dream Job: </span>" + studentData.dj);

    $( "#image" ).stop().fadeTo( "fast", 0, function() {
      $( "#image" ).attr("src", "assets/photos/" + touched.id + ".jpg");
      $( "#image" ).stop().fadeTo( "slow", 1);
    });


    //.fadeOut().attr("src", "assets/photos/" + touched.id + ".jpg");

    touched.src = "assets/buttons/selected.jpg";
    touched.className = "student-button";
    $( "#"+ maat.selected )
      .attr("src", "assets/buttons/" + maat.selected + ".png")
      .attr("class", "student-button floaty");
    maat.selected = touched.id;

  },

  //clearDivs: function(div) {
  //  console.log(div);
  //  $( div ).empty();
  //},

  makePara: function(div, data) {
    console.log("make para");
    console.log(data);
    $( div ).append( "<p>" + data + "</p>");
  }
};
