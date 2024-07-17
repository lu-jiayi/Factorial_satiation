///Don't touch line 2.
var order = 1;

function getRandomInt1To8() {
  return Math.floor(Math.random() * 8) + 1;
}

// Example usage
let ls_list = getRandomInt1To8();
var list_sequence = {
  1: [1002, 1003, 1006, 1005, 1001, 1007, 1004, 9416, 11, 9310, 22, 9521, 9625, 9312, 33, 9101, 9523, 44, 9415, 9728, 51, 9522, 9206, 62, 9208, 9624, 73, 9731, 9102, 84, 9313, 9729, 91, 9732, 9520, 102, 9627, 9311, 113, 9417, 9104, 124, 9626, 9105, 131, 9519, 9103, 142, 9418, 153, 9209, 9730, 9207, 164, 9314],
  2: [1002, 1003, 1006, 1005, 1001, 1007, 1004, 9416, 12, 9310, 23, 9521, 9625, 9312, 34, 9101, 9523, 41, 9415, 9728, 52, 9522, 9206, 63, 9208, 9624, 74, 9731, 9102, 81, 9313, 9729, 92, 9732, 9520, 103, 9627, 9311, 114, 9417, 9104, 121, 9626, 9105, 132, 9519, 9103, 143, 9418, 154, 9209, 9730, 9207, 161, 9314],
  3: [1002, 1003, 1006, 1005, 1001, 1007, 1004, 9416, 13, 9310, 24, 9521, 9625, 9312, 31, 9101, 9523, 42, 9415, 9728, 53, 9522, 9206, 64, 9208, 9624, 71, 9731, 9102, 82, 9313, 9729, 93, 9732, 9520, 104, 9627, 9311, 111, 9417, 9104, 122, 9626, 9105, 133, 9519, 9103, 144, 9418, 151, 9209, 9730, 9207, 162, 9314],
  4: [1002, 1003, 1006, 1005, 1001, 1007, 1004, 9416, 14, 9310, 21, 9521, 9625, 9312, 32, 9101, 9523, 43, 9415, 9728, 54, 9522, 9206, 61, 9208, 9624, 72, 9731, 9102, 83, 9313, 9729, 94, 9732, 9520, 101, 9627, 9311, 112, 9417, 9104, 123, 9626, 9105, 134, 9519, 9103, 141, 9418, 152, 9209, 9730, 9207, 163, 9314],
  5: [1002, 1003, 1006, 1005, 1001, 1007, 1004, 9314, 164, 9207, 9730, 9209, 153, 9418, 142, 9103, 9519, 131, 9105, 9626, 124, 9104, 9417, 113, 9311, 9627, 102, 9520, 9732, 91, 9729, 9313, 84, 9102, 9731, 73, 9624, 9208, 62, 9206, 9522, 51, 9728, 9415, 44, 9523, 9101, 33, 9312, 9625, 9209, 22, 9207, 164, 9314],
  6: [1002, 1003, 1006, 1005, 1001, 1007, 1004, 9314, 161, 9207, 9730, 9209, 154, 9418, 143, 9103, 9519, 132, 9105, 9626, 121, 9104, 9417, 114, 9311, 9627, 103, 9520, 9732, 92, 9729, 9313, 81, 9102, 9731, 74, 9624, 9208, 63, 9206, 9522, 52, 9728, 9415, 41, 9523, 9101, 34, 9312, 9625, 9209, 23, 9207, 161, 9314],
  7: [1002, 1003, 1006, 1005, 1001, 1007, 1004, 9314, 162, 9207, 9730, 9209, 151, 9418, 144, 9103, 9519, 133, 9105, 9626, 122, 9104, 9417, 111, 9311, 9627, 104, 9520, 9732, 93, 9729, 9313, 82, 9102, 9731, 71, 9624, 9208, 64, 9206, 9522, 53, 9728, 9415, 42, 9523, 9101, 31, 9312, 9625, 9209, 24, 9207, 162, 9314],
  8: [1002, 1003, 1006, 1005, 1001, 1007, 1004, 9314, 163, 9207, 9730, 9209, 152, 9418, 141, 9103, 9519, 134, 9105, 9626, 123, 9104, 9417, 112, 9311, 9627, 101, 9520, 9732, 94, 9729, 9313, 83, 9102, 9731, 72, 9624, 9208, 61, 9206, 9522, 54, 9728, 9415, 43, 9523, 9101, 32, 9312, 9625, 9209, 21, 9207, 163, 9314]
}
var flat_list = list_sequence[ls_list];
const presentation_list = flat_list.map((integer) => all_stimuli.find((item) => item.unique_id === integer));
console.log(presentation_list);

/// Helper function that shuffles an array. Don't touch.
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

///Helper functions to get random selection from array, and to remove elements from array. Don't touch.
function getRandomNonDuplicateSelection(arr, count, exclusionArr) {
  var selected = [];
  var available = arr.filter(item => !exclusionArr.includes(item));

  if (available.length < count) {
    throw new Error('Insufficient unique elements available for selection.');
  }

  for (var i = 0; i < count; i++) {
    var randomIndex = Math.floor(Math.random() * available.length);
    selected.push(available[randomIndex]);
    available.splice(randomIndex, 1);
  }
  return selected;
}

function removeFromArray(arr, elements) {
  for (var i = 0; i < elements.length; i++) {
    var index = arr.indexOf(elements[i]);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
}

/// Actual experiment
function make_slides(f) {
  var slides = {};  
  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.single_trial = slide({
    name: "single_trial",
    start: function() {
      $(".err").hide();
      $(".display_condition").html("You are in " + exp.condition + ".");
    },
    button : function() {
      response = $("#text_response").val();
      if (response.length == 0) {
        $(".err").show();
      } else {
        exp.data_trials.push({
          "trial_type" : "single_trial",
          "response" : response
        });
        exp.go(); //make sure this is at the *end*, after you log your data
      }
    },
  });

  slides.practice_slider = slide({
    name : "practice_slider",

    /* trial information for this block
     (the variable 'stim' will change between each of these values,
      and for each of these, present_handle will be run.) */
    present : [{"a": 1}],
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      $(".err").hide();
      $(".errgood").hide();
      this.stim = stim;
      $(".prompt").html("This is a pen.");
      this.init_sliders();
      exp.sliderPost = null; //erase current slider value
      exp.first_response_wrong = 0;
      exp.first_response_value = null;
      exp.attempts = 0;
    },
    button : function() {
      if (exp.sliderPost == null) {
        $(".err").show();
      } 
      else if (exp.sliderPost < 5) {
        exp.first_response_wrong = 1;
        exp.first_response_value =exp.sliderPost;
        exp.attempts = exp.attempts + 1;
        $(".errgood").show();
      }
      else {
        this.log_responses();
        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        _stream.apply(this);
      }
    },
    init_sliders : function() {
      utils.make_likert_scale("#practice_slider_1", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },
    log_responses : function() {
      exp.data_trials.push({
        "response" : exp.sliderPost,
        "first_response_value": exp.first_response_value,
        "wrong_attempts": exp.attempts,
        "item_type" : "practice_good",
        "item_number": "practice_good",
        "trial_sequence_total": 0
      });

    }
  });


  slides.post_practice_1 = slide({
    name : "post_practice_1",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


 

  slides.practice_slider_bad = slide({
    name : "practice_slider_bad",

    /* trial information for this block
     (the variable 'stim' will change between each of these values,
      and for each of these, present_handle will be run.) */
    present : [1],

  
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      $(".err").hide();
      $(".errbad").hide();
      $(".prompt").html("The was insulted waitress frequently.");
      this.init_sliders();
      exp.sliderPost = null; //erase current slider value
      exp.first_response_wrong = 0;
      exp.first_response_value = null;
      exp.attempts = 0;
    },
    button : function() {
      if (exp.sliderPost == null) {
        $(".err").show();
      } 
      else if (exp.sliderPost > 3) {
        exp.first_response_wrong = 1;
        exp.first_response_value = exp.sliderPost;
        exp.attempts = exp.attempts + 1;
        $(".errbad").show();
      }
      else {
        this.log_responses();
        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        _stream.apply(this);
      }
    },
    init_sliders : function() {
      utils.make_likert_scale("#practice_slider_2", function(event, ui) {
        exp.sliderPost = ui.value;
        
      });
    },
    log_responses : function() {
      exp.data_trials.push({
        "response" : exp.sliderPost,
        "first_response_value": exp.first_response_value,
        "wrong_attempts": exp.attempts,
        "item_type" : "practice_bad",
        "item_number": "practice_bad",
        "trial_sequence_total": 0
      });

    }
  });

  slides.post_practice_2 = slide({
    name : "post_practice_2",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.practice_slider_mid = slide({
    name : "practice_slider_mid",

    /* trial information for this block
     (the variable 'stim' will change between each of these values,
      and for each of these, present_handle will be run.) */
    present : [1],

  
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      $(".err").hide();
      $(".errbad").hide();
      $(".prompt").html("Tanya danced with as handsome a boy as her father.");
      this.init_sliders();
      exp.sliderPost = null; //erase current slider value
      exp.first_response_wrong = 0;
      exp.first_response_value = null;
      exp.attempts = 0;
    },
    button : function() {
      if (exp.sliderPost == null) {
        $(".err").show();
      } 
      else {
        this.log_responses();
        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        _stream.apply(this);
      }
    },
    init_sliders : function() {
      utils.make_likert_scale("#practice_slider_3", function(event, ui) {
        exp.sliderPost = ui.value;
        
      });
    },
    log_responses : function() {
      exp.data_trials.push({
        "response" : exp.sliderPost,
        "first_response_value": exp.first_response_value,
        "item_type" : "practice_mid",
        "item_number": "practice_mid",
        "trial_sequence_total": 0
      });

    }
  });

  slides.post_practice_3 = slide({
    name : "post_practice_3",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });



  slides.last_reminder = slide({
    name : "last_reminder",
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
    
  });

 

  slides.one_slider = slide({
    name : "one_slider",

    /* trial information for this block
     (the variable 'stim' will change between each of these values,
      and for each of these, present_handle will be run.) */
    present : presentation_list,
    
    //this gets run only at the beginning of the block
    present_handle : function(stim) {
      $(".err").hide();
      this.stim = stim; //I like to store this information in the slide so I can record it later.
      $(".target").html(stim.sentence);
      this.init_sliders()
      exp.sliderPost = null; //erase current slider value
    },

    button : function() {
      if (exp.sliderPost == null) {
        $(".err").show();
      } else {
        this.log_responses();

        /* use _stream.apply(this); if and only if there is
        "present" data. (and only *after* responses are logged) */
        _stream.apply(this);
      }
    },

    init_sliders : function() {
      utils.make_likert_scale("#single_slider", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },

    log_responses : function() {
      exp.data_trials.push({
        // item-specific fields
        "response" : exp.sliderPost,
        "type": this.stim.type,
        "length" : this.stim.length,
        "stru_type" : this.stim.stru_type,
        "item_number" : this.stim.item,
        "unique_id" : this.stim.unique_id,
        "sentence_text" : this.stim.sentence,
        "expected_rating" : this.stim.expected_rating,
        "trial_sequence_total": order,
        "list_number": ls_list,
        "block_number": Math.ceil((order-7.5)/12),
      });
      order = order + 1;
    }
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
        problems: $("#problems").val(),
        fairprice: $("#fairprice").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      proliferate.submit(exp.data);
    }
  });

  return slides;
}

/// init ///
function init() {
  exp.trials = [];
  exp.catch_trials = [];
  //exp.condition = _.sample(["condition 1", "condition 2"]); //can randomize between subject conditions here
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  exp.structure=["i0", "instructions", "practice_slider", "post_practice_1", "practice_slider_bad", "post_practice_2", "practice_slider_mid", "post_practice_3", "last_reminder", 'one_slider', 'subj_info', 'thanks'];

  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    exp.go();
  });

  exp.go(); //show first slide
}
