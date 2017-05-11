'use strict';
$(document).ready(function() {


    var link = '';

    $('#casuale').on('click', function() {
        window.open('https://it.wikipedia.org/wiki/Special:Random');
    });

    $('#invia').on('click', function() {

        $.ajax({
                url: 'https://it.wikipedia.org///w/api.php?action=query&format=json&list=search&srsearch=Juventus',
                type: 'GET',
                dataType: 'jsonp',
            })
            .done(function(data) {
                console.log("success");
                link = data.query.search[0].title;
                console.log(link);
                var codificato = encodeURI(link);
                var nuovoLink = $('<a href="https://it.wikipedia.org/wiki/'+codificato+'" target="_blank">Indirizzo trovato</a>');
                $('.contenitorePrincipale').append(nuovoLink);
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
