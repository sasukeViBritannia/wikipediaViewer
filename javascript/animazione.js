'use strict';
$(document).ready(function() {


    $('#casuale').on('click', function() {
        window.open('https://en.wikipedia.org/wiki/Special:Random');
    });

});

/*Chiamate ajax
con parametri action di tipo query
list di tipo search
rssearch la stringa da ricercare
formato tipo json
controllare le pagine dal titolo e fare encoding uri
--da verificare se possibile aggiungere piccola didascalia*/
