function chat() {
  $.ajax({
    method: "POST",
    url: "index.php",
    data: {
      input: $("#input").val(),
      name: $("#name").val()
    }
  }).done(function(result) {
    $("#chat").html(result)
    $("#input").val("")
  })
}
$("#btn").click(function() {
  chat()
})
setInterval(function() {
  $.ajax({
      method: "POST",
      url: "index.php"
    }).done(function(result) {
      $("#chat").html(result)
    })
}, 100)