///Don't touch line 2.
var order = 1;

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

let ls_list = 8;
console.log(ls_list);
var list_sequence = {
  1: [1007, 1001, 1004, 1006, 1002, 1005, 1003, 1008, 1009, 9111, 11, 9511, 9211, 9711, 22, 9321, 9121, 33, 9311, 9421, 44, 9721, 9411, 9712, 51, 9512, 9112, 9312, 62, 9322, 9122, 9412, 73, 9422, 9212, 84, 9722, 9513, 9123, 91, 9113, 102, 9313, 9413, 9713, 113, 9323, 9213, 9723, 124, 9423, 9724, 9324, 131, 9424, 9214, 142, 9714, 9114, 9414, 153, 9314, 9124, 164, 9514],
  2: [1007, 1001, 1004, 1006, 1002, 1005, 1003, 1008, 1009, 9712, 52, 9512, 9112, 9312, 63, 9322, 9122, 9412, 74, 9422, 9212, 81, 9722, 9513, 9123, 92, 9113, 103, 9313, 9413, 9713, 114, 9323, 9213, 9723, 121, 9423, 9724, 9324, 132, 9424, 9214, 143, 9714, 9114, 9414, 154, 9314, 9124, 161, 9514, 9111, 12, 9511, 9211, 9711, 23, 9321, 9121, 34, 9311, 9421, 41, 9721, 9411],
  3: [1007, 1001, 1004, 1006, 1002, 1005, 1003, 1008, 1009, 9513, 9123, 93, 9113, 104, 9313, 9413, 9713, 111, 9323, 9213, 9723, 122, 9423, 9724, 9324, 133, 9424, 9214, 144, 9714, 9114, 9414, 151, 9314, 9124, 162, 9514, 9111, 13, 9511, 9211, 9711, 24, 9321, 9121, 31, 9311, 9421, 42, 9721, 9411, 9712, 53, 9512, 9112, 9312, 64, 9322, 9122, 9412, 71, 9422, 9212, 82, 9722],
  4: [1007, 1001, 1004, 1006, 1002, 1005, 1003, 1008, 1009, 9724, 9324, 134, 9424, 9214, 141, 9714, 9114, 9414, 152, 9314, 9124, 163, 9514, 9111, 14, 9511, 9211, 9711, 21, 9321, 9121, 32, 9311, 9421, 43, 9721, 9411, 9712, 54, 9512, 9112, 9312, 61, 9322, 9122, 9412, 72, 9422, 9212, 83, 9722, 9513, 9123, 94, 9113, 101, 9313, 9413, 9713, 112, 9323, 9213, 9723, 123, 9423],
  5: [1007, 1001, 1004, 1006, 1002, 1005, 1003, 1008, 1009, 9514, 164, 9124, 9314, 153, 9414, 9114, 9714, 142, 9214, 9424, 131, 9324, 9724, 9423, 124, 9723, 9213, 9323, 113, 9713, 9413, 9313, 102, 9113, 91, 9123, 9513, 9722, 84, 9212, 9422, 73, 9412, 9122, 9322, 62, 9312, 9112, 9512, 51, 9712, 9411, 9721, 44, 9421, 9311, 33, 9121, 9321, 22, 9711, 9211, 9511, 11, 9111],
  6: [1007, 1001, 1004, 1006, 1002, 1005, 1003, 1008, 1009, 9411, 9721, 41, 9421, 9311, 34, 9121, 9321, 23, 9711, 9211, 9511, 12, 9111, 9514, 161, 9124, 9314, 154, 9414, 9114, 9714, 143, 9214, 9424, 132, 9324, 9724, 9423, 121, 9723, 9213, 9323, 114, 9713, 9413, 9313, 103, 9113, 92, 9123, 9513, 9722, 81, 9212, 9422, 74, 9412, 9122, 9322, 63, 9312, 9112, 9512, 52, 9712],
  7: [1007, 1001, 1004, 1006, 1002, 1005, 1003, 1008, 1009, 9722, 82, 9212, 9422, 71, 9412, 9122, 9322, 64, 9312, 9112, 9512, 53, 9712, 9411, 9721, 42, 9421, 9311, 31, 9121, 9321, 24, 9711, 9211, 9511, 13, 9111, 9514, 162, 9124, 9314, 151, 9414, 9114, 9714, 144, 9214, 9424, 133, 9324, 9724, 9423, 122, 9723, 9213, 9323, 111, 9713, 9413, 9313, 104, 9113, 93, 9123, 9513],
  8: [1007, 1001, 1004, 1006, 1002, 1005, 1003, 1008, 1009, 9423, 123, 9723, 9213, 9323, 112, 9713, 9413, 9313, 101, 9113, 94, 9123, 9513, 9722, 83, 9212, 9422, 72, 9412, 9122, 9322, 61, 9312, 9112, 9512, 54, 9712, 9411, 9721, 43, 9421, 9311, 32, 9121, 9321, 21, 9711, 9211, 9511, 14, 9111, 9514, 163, 9124, 9314, 152, 9414, 9114, 9714, 141, 9214, 9424, 134, 9324, 9724]
}
var flat_list = list_sequence[ls_list];
const presentation_list = flat_list.map((integer) => all_stimuli.find((item) => item.unique_id === integer));
var presentation_list_first_half = presentation_list.slice(0,37);
var presentation_list_second_half = presentation_list.slice(-28);
console.log(presentation_list_first_half);
console.log(presentation_list_second_half);

/// Helper function that shuffles an array. Don't touch.


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
  slides.anchors = slide({
    name : "anchors",
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

 

  slides.one_slider_first = slide({
    name : "one_slider_first",

    /* trial information for this block
     (the variable 'stim' will change between each of these values,
      and for each of these, present_handle will be run.) */
    present : presentation_list_first_half,
    
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
      utils.make_likert_scale("#single_slider1", function(event, ui) {
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
        "expected_rating" : this.stim.expected,
        "trial_sequence_total": order,
        "list_number": ls_list,
        "block_number": Math.ceil((order-9.5)/14),
      });
      order = order + 1;
    }
  });

  slides.one_slider_second = slide({
    name : "one_slider_second",

    /* trial information for this block
     (the variable 'stim' will change between each of these values,
      and for each of these, present_handle will be run.) */
    present : presentation_list_second_half,
    
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
      utils.make_likert_scale("#single_slider2", function(event, ui) {
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
        "expected_rating" : this.stim.expected,
        "trial_sequence_total": order,
        "list_number": ls_list,
        "block_number": Math.ceil((order-9.5)/14),
      });
      order = order + 1;
    }
  });

  slides.attention =  slide({
    name : "attention",
    present : [1],
    present_handle : function(stim) {
      $(".err").hide();
    },
    button : function() {
      if ($("#attention_response").val() == "") {
        $(".err").show();
      } else {
      this.log_responses();
      _stream.apply(this);
      }
    },
    log_responses : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.data_trials.push({
       "attention_response": $("#attention_response").val()
      });
    }
    
  });


  slides.attention2 =  slide({
    name : "attention2",
    present : [1],
    present_handle : function(stim) {
      $(".err").hide();
    },
    button : function() {
      if ($("#prolific_id").val() == "") {
        $(".err").show();
      } else {
      this.log_responses();
      _stream.apply(this);
      }
    },
    log_responses : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.data_trials.push({
       "prolific_id": $("#prolific_id").val()
      });
    }
    
  });

  slides.subj_info =  slide({
    name : "subj_info",
    present : [1],
    present_handle : function(stim) {
      $(".err").hide();
    },
    submit : function(e){
      if ($("#age").val() == "") {
        $(".err").show();
      } else {
        if ($("#live_in_usa").val() == "default") {
          $(".err").show();
        } else {
          if ($("#parents_speak_English").val() == "default") {
            $(".err").show();
          } else {
            if ($("#state").val() == "") {
              $(".err").show();
            } else {
      exp.subj_data = {
        age : $("#age").val(),
        live_in_usa : $("#live_in_usa").val(),
        parents_speak_English : $("#parents_speak_English").val(),
        state : $("#state").val()
      };
      exp.go(); }}}}
   
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
  exp.structure=["i0", 'subj_info', "instructions","anchors", "last_reminder",'one_slider_first', 'one_slider_second','attention2','thanks'];

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
