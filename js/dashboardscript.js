
  var to_do_list = document.getElementById("to_do");

  var to_do_entry = '';

  var todos_txt = [
  "Create a website to add new to do.",
  "Create a website to show how a to do can be edited.",
  "Create footnote with authors names.",
  "Create an overview of all to dos. Each to do should include a due date, edit and remove button.",
  "Website should be viewable on all devices.",
  "Make your code readible.",
  "Upload the code to repository on git.",
  "Choose a timeslot to discuss the website.",
  "Find a group.",
  "Add git username to Projektwiki."]

  var random_progress = Math.floor(Math.random() * 101);

  var progress_bar = '<div class="progress">'+
                       '<div  class="progress-bar progress-bar-striped"'+
                          'role="progressbar"'+
                          'aria-valuenow="60"'+
                          'aria-valuemin="0"'+
                          'aria-valuemax="100"'+
                          'style="width:'

  function yyyy_mm_dd(date) {
      var month = date.getMonth()+1; //(whoa, January is 0!)
      var year = date.getFullYear();
  return year + ' - ' + ("0" + (month)).slice(-2) + ' - ' ;
  }

  var day = 1;
  var due_date = yyyy_mm_dd(new Date());

  var edit_button = '<button type="button"'+
                        'class="btn btn-default btn-lg"'+
                        'data-toogle="modal"'+
                        'data-target="#editModal"'+
                        // 'onclick="window.open(\'edit_todo.html\');"'+
                        'onclick="$(\'#editModal\').modal(\'show\')"'+
                        'data-placement="right"'+
                        'title="Edit this todo">'+
                          '<span class="fa fa-edit"'+
                                'aria-hidden="true"></span>'+
                    '</button>'

  var done_button = '<button type="button"'+
                        'class="btn btn-default btn-lg"'+
                        'data-placement="right"'+
                        'title="Todo is done">'+
                          '<span class="fa fa-check-circle"'+
                                'aria-hidden="true"></span>'+
                    '</button>'

  var remove_button = '<button type="button"'+
                          'class="btn btn-default btn-lg"'+
                          'data-placement="right"'+
                          'title="Remove this todo">'+
                            '<span class="fa fa-trash"'+
                                   'aria-hidden="true"></span>'
                      '</button>'

  for (var i = 0; i < 5; i++) {

    random_progress = Math.floor(Math.random() * 101);

    text = todos_txt[Math.random()*todos_txt.length|0];

    day = Math.floor(Math.random() * 30);

    to_do_entry +=   '<div id="toDoEntry" class="row buffer">'+
                        '<div class="col-md-12">'+
                          '<div class="row buffer">'+
                            '<div class="col-md-6"><h3>'+

                                text + '</h3>' +

                                progress_bar +

                                random_progress +
                                '%">' + random_progress + '%' +

                             '</div>'+
                          '</div>' +

                            '</div>'+

                            '<div class="col-md-2"><h3>'+
                                due_date + (("0" + (day)).slice(-2)) +
                            '</h3></div>'+

                            '<div class="col-md-1">'+
                                edit_button +
                            '</div>'+

                            '<div class="col-md-1">'+
                                done_button +
                            '</div>'+

                            '<div class="col-md-1">'+
                                remove_button +
                            '</div>'+

                        '</div>'+
                    '</div>'+
                '</div>'
    ;
  }

  to_do_list.innerHTML = '<div id="toDoList" class="container_todos">' + to_do_entry + '</div>'




var slider = document.getElementById("myRange");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = "Your Current TO-DO Progress: "+this.value+"%";
}
