


chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
    var filetype = item.filename.split('.').pop();
    filetype = filetype.toLowerCase();
    var folder = "General";
    chrome.storage.sync.get("option", function (data) {
        de = data.option.find(el => el['ext'].indexOf(filetype) >= 0);
        if (de) {
            folder = de['cate'];
        }
        suggest({
            filename: folder + "/" + item.filename,
        });
    });

    return true;

});

