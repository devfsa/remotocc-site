(function(window, document, location) {

    var tag = getTagNameFromUrl(location);
    var jobItems = document.querySelectorAll('.job-item');

    window.addEventListener('hashchange', changeUrlHandler);

    if (tag !== '') {
        filterJobItemsByTag(tag);
    }

    function changeUrlHandler() {
        tag = getTagNameFromUrl(location);
        
        filterJobItemsByTag(tag);
    }

    function filterJobItemsByTag(tag) {
        jobItems.forEach(function(jobItem) {
            var tags = jobItem.dataset.tags.split(',');
            jobItem.style.display = tags.indexOf(tag) > -1 ? 'block' : 'none';
        });
    }

    function getTagNameFromUrl(location) {
        return location.hash.substr(1);
    }

})(window, document, location);