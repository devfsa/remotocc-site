(function(window, document, location) {

    // tagname from url
    var tag = getTagNameFromUrl(location);

    // job item html elements
    var jobItems = document.querySelectorAll('.job-item');
    var filters = document.getElementById('filters');
    var tagsFilterLabel = document.getElementById('tagsFilterLabel');
    var clearFiltersBtn = document.getElementById('clearFiltersBtn');

    // listening clear filters button
    clearFiltersBtn.addEventListener('click', clearFiltersHandler);

    // listening url change detection
    window.addEventListener('hashchange', changeUrlHandler);

    // filter by tag on load
    if (tag !== '') {
        filterJobItemsByTag(jobItems, tag, tagsFilterLabel);
    }

    // change url handler
    function changeUrlHandler() {
        tag = getTagNameFromUrl(location);
        filterJobItemsByTag(jobItems, tag, tagsFilterLabel);
    }

    // filter job item elements by tag name
    function filterJobItemsByTag(jobItems, tag, tagsFilterLabel) {
        var tagIsEmpty = tag === '';
        
        tagsFilterLabel.innerHTML = '';
        filters.style.visibility  = 'hidden';
        
        if (tagIsEmpty === false) {
            tagsFilterLabel.innerHTML = tag;
            filters.style.visibility = 'visible';
        }

        jobItems.forEach(function(jobItem) {
            var tags = jobItem.dataset.tags.split(',');
            var isShowJob = tags.indexOf(tag) > -1 || tagIsEmpty;
            jobItem.style.display = isShowJob ? 'block' : 'none';
        });
    }

    // clear filter handler
    function clearFiltersHandler() {
        console.log('ok');
        var emptyTag = '';
        location.hash = '';
        filterJobItemsByTag(jobItems, emptyTag, tagsFilterLabel);
    }

    // remote hastag symbol '#' from anchor url
    function getTagNameFromUrl(location) {
        return location.hash.substr(1);
    }

})(window, document, location);