'use strict';
$(document).ready(function() {


    /*var link = '';*/

    $('#casuale').on('click', function() {
        window.open('https://it.wikipedia.org/wiki/Special:Random');
    });

    $('form').submit(function(event) {
        event.preventDefault();
        var testo = $('input[name="ricerca"]').val();
        window.alert('Form attivata con testo: '+testo);
    });

    /*$('#invia').on('click', function() {

        $.ajax({
                url: 'https://it.wikipedia.org///w/api.php?action=query&format=json&list=search&srsearch=Juventus',
                type: 'GET',
                dataType: 'jsonp',
            })
            .done(function(data) {
                console.log("success");
                var trovati = data.query.searchinfo.totalhits;
                if (trovati > 0) {
                    for (var i = 0; i < 10; i++) {
                        link = data.query.search[i].title;
                        console.log(link);
                        var codificato = encodeURI(link);
                        var nuovoLink = $('<p><a href="https://it.wikipedia.org/wiki/' + codificato + '" target="_blank">' + link + '</a></p>');
                        $('.contenitorePrincipale').append(nuovoLink);
                    }

                } else {
                    window.alert('Nessun risultato trovato');
                }

            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });

    });*/
});

/*Chiamate ajax
con parametri action di tipo query
list di tipo search
rssearch la stringa da ricercare
formato tipo json
controllare le pagine dal titolo e fare encoding uri
--da verificare se possibile aggiungere piccola didascalia--
ATTENZIONE all'evento sul pulsante all'internodella form*/
