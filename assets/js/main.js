(function(window, document, location) {

    var anchor = location.hash;

    window.addEventListener('hashchange', changeUrlHandler);

    function changeUrlHandler() {
        anchor = location.hash;
        console.log(anchor);
    }

})(window, document, location);