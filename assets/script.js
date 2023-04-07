

$(document). ready(function () {

  // Added current day and time
  var currentDayTime = dayjs();
  $("#currentDay").text(currentDayTime.format("dddd, MMM. D, YYYY hh:mm A"))
  
  
  // This is the current hour in 24 hour format

  var currentHour = currentDayTime.format('H');
  console.log(currentHour);


  // this is the color condition for-loop
  for (i = 9; i <= 17; i++) {
    if (currentHour === i) {
      $("#hour-" + i).addClass('present');
    } else if (currentHour < i) {
      $("#hour-" + i).addClass('future');
    } else if (currentHour > i) {
      $("#hour-" + i).addClass('past');
    }
  }

  
  // Function for storing and rendering decriptions

  // *** I tried to for-loop the number but it keeps bugging out so I did repetitions instead ***

  // function init() {
  //   for (var i = 9; i <= 17; i++) {
  //     var button = $("#hour-" + i).children(".saveBtn");
  //     var description = $("#hour-" + i).children(".description");
  
  //     function setDesc() {
  //       localStorage.setItem("description-" + i, description.val());
  //     }
  
  //     function getDesc() {
  //       var storedDesc = localStorage.getItem("description-" + i);
  //       if (storedDesc !== null) {
  //         description.val(storedDesc);
  //       }
  //     }
  
  //     button.on("click", function() {
  //       setDesc();
  //     })
  
  //     getDesc();
  //   }
  // }
  
  // init();
  
  
  // Function for hour 9 
  function init9() {
    
    var button9 = $("#hour-9").children(".saveBtn");
    var description9 = $("#hour-9").children(".description");

    function setDesc() {
      localStorage.setItem("description-9", description9.val());
    }

    function getDesc() {
      var storedDesc = localStorage.getItem("description-9");
      if (storedDesc !== null) {
        description9.val(storedDesc);
      }
    }
    getDesc();

    button9.on("click", function() {
      setDesc();
    })
    
  
  }
  init9();

  // Function for hour 10 
  function init10() {
    
    var button10 = $("#hour-10").children(".saveBtn");
    var description10 = $("#hour-10").children(".description");

    function setDesc() {
      localStorage.setItem("description-10", description10.val());
    }

    function getDesc() {
      var storedDesc = localStorage.getItem("description-10");
      if (storedDesc !== null) {
        description10.val(storedDesc);
      }
    }
    getDesc();

    button10.on("click", function() {
      setDesc();
    })
    
  
  }
  init10();

  // Function for hour 11 
  function init11() {
    
    var button11 = $("#hour-11").children(".saveBtn");
    var description11 = $("#hour-11").children(".description");

    function setDesc() {
      localStorage.setItem("description-11", description11.val());
    }

    function getDesc() {
      var storedDesc = localStorage.getItem("description-11");
      if (storedDesc !== null) {
        description11.val(storedDesc);
      }
    }
    getDesc();

    button11.on("click", function() {
      setDesc();
    })
    
  
  }
  init11();

  // Function for hour 12 
  function init12() {
    
    var button12 = $("#hour-12").children(".saveBtn");
    var description12 = $("#hour-12").children(".description");

    function setDesc() {
      localStorage.setItem("description-12", description12.val());
    }

    function getDesc() {
      var storedDesc = localStorage.getItem("description-12");
      if (storedDesc !== null) {
        description12.val(storedDesc);
      }
    }
    getDesc();

    button12.on("click", function() {
      setDesc();
    })
    
  
  }
  init12();

  // Function for hour 13 
  function init13() {
    
    var button13 = $("#hour-13").children(".saveBtn");
    var description13 = $("#hour-13").children(".description");

    function setDesc() {
      localStorage.setItem("description-13", description13.val());
    }

    function getDesc() {
      var storedDesc = localStorage.getItem("description-13");
      if (storedDesc !== null) {
        description13.val(storedDesc);
      }
    }
    getDesc();

    button13.on("click", function() {
      setDesc();
    })
    
  
  }
  init13();

  // Function for hour 14 
  function init14() {
    
    var button14 = $("#hour-14").children(".saveBtn");
    var description14 = $("#hour-14").children(".description");

    function setDesc() {
      localStorage.setItem("description-14", description14.val());
    }

    function getDesc() {
      var storedDesc = localStorage.getItem("description-14");
      if (storedDesc !== null) {
        description14.val(storedDesc);
      }
    }
    getDesc();

    button14.on("click", function() {
      setDesc();
    })
    
  
  }
  init14();

  // Function for hour 15 
  function init15() {
    
    var button15 = $("#hour-15").children(".saveBtn");
    var description15 = $("#hour-15").children(".description");

    function setDesc() {
      localStorage.setItem("description-15", description15.val());
    }

    function getDesc() {
      var storedDesc = localStorage.getItem("description-15");
      if (storedDesc !== null) {
        description15.val(storedDesc);
      }
    }
    getDesc();

    button15.on("click", function() {
      setDesc();
    })
    
  
  }
  init15();

  // Function for hour 16 
  function init16() {
    
    var button16 = $("#hour-16").children(".saveBtn");
    var description16 = $("#hour-16").children(".description");

    function setDesc() {
      localStorage.setItem("description-16", description16.val());
    }

    function getDesc() {
      var storedDesc = localStorage.getItem("description-16");
      if (storedDesc !== null) {
        description16.val(storedDesc);
      }
    }
    getDesc();

    button16.on("click", function() {
      setDesc();
    })
    
  
  }
  init16();

  // Function for hour 17 
  function init17() {
    
    var button17 = $("#hour-17").children(".saveBtn");
    var description17 = $("#hour-17").children(".description");

    function setDesc() {
      localStorage.setItem("description-17", description17.val());
    }

    function getDesc() {
      var storedDesc = localStorage.getItem("description-17");
      if (storedDesc !== null) {
        description17.val(storedDesc);
      }
    }
    getDesc();

    button17.on("click", function() {
      setDesc();
    })
    
  
  }
  init17();


});
