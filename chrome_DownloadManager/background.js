

chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
    var filetype = item.filename.split('.').pop();
    filetype = filetype.toLowerCase();
    var folder;
   if(['xml' ,'doc ' ,'pdf', 'ppt', 'pps', 'docx','docm','xls','xlsx','xlsm','pptx','pub'].indexOf(filetype) >= 0) {

        folder = "Documents";
    }

    else if(['zip' ,'rar ' ,'arj', 'gz', 'sit' ,'sitx ','sea', 'ace' ,'bz2 ','7z','tgz'].indexOf(filetype) >= 0) {
        
        folder="Compressed";
    }
    else if (['exe','msi'].indexOf(filetype) >= 0) {
        folder = "Programs";
    }
    else if (['avi','mpg','mpe', 'mpeg', 'asf', 'wmv' ,'mov' ,'qt','rm' ,'mp4', 'flv' ,'m4v' ,'webm' ,'ogv' ,'ogg'].indexOf(filetype) >= 0) {
        folder= "Videos"
    }
    else if (['png', 'jpg', 'tif', 'gif', 'bmp', 'jpeg', 'fax', 'cal', 'tga', 'tiff', 'jpe', 'img', 'ras', 'psd', 'wmf'].indexOf(filetype) >= 0) {
        folder = "Photos"
    }
    else if (['torrent'].indexOf(filetype) >= 0) {
        folder = "Torrents"
    }
    else {
        folder="General"
    }
    suggest({
        filename:folder+"/"+item.filename,
        conflictAction: 'overwrite'
    });
    
});
