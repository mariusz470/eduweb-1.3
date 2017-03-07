(function($) {

    $(document).ready(function() {
    	var clicked=false;
    	function cleanbutton(){
    		if (clicked) {
    			$("#result").find( "span:last" ).remove();
    			$("#info").find( "span:last" ).remove();

    		}
    		else {
    			clicked=true
    		}
    		
    	}
    	console.log("success");
		var grid = "$(div.grid.grid-12);";
		var http = "$(.nav a [href^='http']);";
		var radio = "$(input:radio:not(:checked), input:checkbox:not(:checked));";
		var empty = "$(div#text p:empty:first);";
		var pagination = "$(.pagination-item:not('span'));";
		$("#grid").on("click", function() {
			cleanbutton();
			$("#info").append('<span>Wszystkie elementy &ltdiv&gt, posiadające zarówno klasę “grid” oraz klasę “grid-12”.</span>');
    		$("#result").append( $( "<span>"+grid+" </span>" ) );
 			 }
		);
    	$("#http").on("click", function() {
    		cleanbutton();
    		$("#info").append('<span>Wszystkie elementy &lta&gt, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav”.</span>');
    		$("#result").append( $( "<span>"+http+" </span>" ) );
  		});
    	$("#radio").on("click", function() {
    		cleanbutton();
    		$("#info").append('<span>Wszystkie elementy &ltinput&gt, których typ to “radio” lub “checkbox” oraz dodatkowo nie są aktualnie zaznaczone (checked).</span>');
    		$("#result").append( $( "<span>"+radio+" </span>" ) );
  		});
    	$("#empty").on("click", function() {
    		cleanbutton();
			$("#info").append('<span>Wyłącznie pierwszy element &ltp&gt, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie &ltdiv&gt z identyfikatorem “text”.</span>');
    		$("#result").append( $( "<span>"+empty+" </span>" ) );
  		});
    	$("#pagination").on("click", function() {
    		cleanbutton();
    		$("#info").append('<span>Wszystkie elementy z klasą “pagination-item”, które nie są elementem span.</span>');
    		$("#result").append( $( "<span>"+pagination+" </span>" ) );
  		});
	 });
})(jQuery);
