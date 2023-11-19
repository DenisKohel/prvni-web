var $j = jQuery.noConflict();

$j(document).ready(function(){
    // Assuming lightBox is compatible with the newer jQuery version
    $j('#fotogalerie a').lightBox();
});