'use strict';
$(document).ready(function() {


    $('#casuale').on('click', function() {
        window.open('https://en.wikipedia.org/wiki/Special:Random');
    });

    $('#invia').on('click', function(){

    	$.ajax({
    		url: 'https://en.wikipedia.org///w/api.php?action=query&format=json&list=search&srsearch=Juventus',
    		type: 'GET',
    		dataType: 'jsonp',
    	})
    	.done(function() {
    		console.log("success");
    	})
    	.fail(function() {
    		console.log("error");
    	})
    	.always(function() {
    		console.log("complete");
    	});
    	
    });
});

/*Chiamate ajax
con parametri action di tipo query
list di tipo search
rssearch la stringa da ricercare
formato tipo json
controllare le pagine dal titolo e fare encoding uri
--da verificare se possibile aggiungere piccola didascalia--
ATTENZIONE all'evento sul pulsante all'internodella form*/
