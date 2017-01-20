//define functions here

function getIt(){
  $("p").click(function(){
    alert("hey!")
  })
}

function frameIt(){
  $(window).on("load", function(){
    $("img").addClass('tasty')
  });
}

function pressIt(){
  $(document).on("keypress", function(key){
    if (key.which == 103){
      alert('g was pressed')
    }
  })
}

function submitIt() {
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.")
  })
}

$(function(){

// call functions here

  getIt()
  frameIt()
  pressIt()
  submitIt()
})
