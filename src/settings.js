// Saves options to chrome.storage
function save_options() {
    var DAD_path = document.getElementById( 'DAD_path' ).value;

    chrome.storage.sync.set(
    {
        DAD_path: DAD_path,
    }, 
    function() 
    {
        var status         = document.getElementById( 'status' );
        status.textContent = 'Settings saved.';
        
        setTimeout( function() 
        {
            status.textContent = '';
        }, 750 );
    });
}

function restore_options() 
{
    console.log( 'restore' );
        
    chrome.storage.sync.get({
        DAD_path: '/pictures/DeviantArt/',
    }, 
    function( items ) 
    {
        document.getElementById( 'DAD_path' ).value = items.DAD_path;
    });
}

document.addEventListener( 'DOMContentLoaded', restore_options );
document.getElementById( 'save' ).addEventListener( 'click', save_options );