$(document).ready( function()
{
	$('form').submit(function(event)
  {
		var $input = $(event.target).find('input');
		var search = $input.val();
  	if (search != "")
   {
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&titles=Main+Page&srsearch="+search+"&srprop=wordcount%7Ctimestamp%7Csnippet",
    function(data)
    {
    var item = data.query.search[3].title;
    var itemDesc = data.query.search[3].snippet;
    var html = $('<li>').html("<h3>"+item+"</h3>\"..."+itemDesc+"...\"");
		$(html).appendTo("#list");
    });
   }

	});

});
