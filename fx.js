$( document ).ready(function() {
    function buscarjson(){ 
        var random = Math.floor((Math.random() * 100) + 1);
        // Get the Quotes JSON from Firebase
        $.getJSON( "https://frasesdb-431ae.firebaseio.com/frases/"+random+".json", function( data ) {
            var items = [];
            $.each( data, function( key, val ) {
                $("#"+key).html(val);
                items.push( "<div id='" + key + "'>" + val + "</div>" );
            });
        });
    }
    buscarjson(5);
    $("#random").on("click",function(e){
        e.preventDefault();
        location.reload(true);
    })
});
//Destroy loader when image is fully charged
$("img").on("load", function(){
    $("#loading").remove();
})