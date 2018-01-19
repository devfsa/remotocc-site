(function(window, document, location) {

    // tagname from url
    var tag = getTagNameFromUrl(location);

    // job item html elements
    var jobItems = document.querySelectorAll('.job-item');

    window.addEventListener('hashchange', changeUrlHandler);

    // filter by tag on load
    if (tag !== '') {
        filterJobItemsByTag(tag);
    }

    // change url handler
    function changeUrlHandler() {
        tag = getTagNameFromUrl(location);
        filterJobItemsByTag(tag);
    }

    // filter job item elements by tag name
    function filterJobItemsByTag(tag) {
        jobItems.forEach(function(jobItem) {
            var tags = jobItem.dataset.tags.split(',');
            jobItem.style.display = tags.indexOf(tag) > -1 ? 'block' : 'none';
        });
    }

    // remote hastag symbol '#' from anchor url
    function getTagNameFromUrl(location) {
        return location.hash.substr(1);
    }

})(window, document, location);