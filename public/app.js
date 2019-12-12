$("#addWorkout").on("click", function() {
    $.ajax({
      type: "POST",
      url: "/submit",
      dataType: "json",
      data: {
        title: $("#title").val(),
        body: $("#body").val(),
        name: $("#name").val()
        
      }
    })
      .then(function(data) {
        console.log(data);
        $("#title").val("");
        $("#body").val("");
        $("#name").val("");
        getWork()
      }
      );
    return false;
  });

  function getWork() {
    $("#workingOn").empty();
    $.getJSON("/workingOn", function(data) {
      for (var i = 0; i < data.length; i++) {
        $("#workingOn").prepend(`<h2>${data[i].title}</h2> <h2>${data[i].body}</h2> <h2>${data[i].name}</h2> <button>update</button>`)}
        
    });
  }

  getWork()