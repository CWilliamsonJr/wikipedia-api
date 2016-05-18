$(document).ready(function() {
    console.log('loaded and ready');
  $("#searchbox").keyup(function(event) {
    if (event.which === 13) {
      GetSomething($("#searchbox").val());

    }
  });
  $("#searchbutton").click(function() {

    GetSomething($("#searchbox").val());
  })
});

function GetSomething(searchTerm) {
  //var searchTerm = "";
  var wikiApi = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&redirects=resolve&callback=?";
  var reqeustObj = {
    error: function(xhr, status, error) {
      console.log(error);
    },
    dataType: "json",
    url: wikiApi,
    data: {
      search: searchTerm
    },
    success: DisplayResults
  };

  $.ajax(reqeustObj);
}

function DisplayResults(results) {

  for (i = 0; i < results[1].length; i++) {
    $("#div_" + (i + 1)).removeClass("hiddendiv");
    $("#result_" + (i + 1)).html(results[1][i]).addClass("bg-primary col-xs-offset-4").css("visibility", "visible");
    $("#link_" + (i + 1)).attr("href", results[3][i]);
    $("#text_" + (i + 1)).text(results[2][i]);

  }

}
