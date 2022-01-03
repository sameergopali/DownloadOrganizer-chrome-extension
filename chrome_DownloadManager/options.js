var rowIdx = 0;
var defaults =
    [
        { cate: "Videos", ext: ['avi', 'mpg', 'mpe', 'mpeg', 'asf', 'wmv', 'mov', 'qt', 'rm', 'mp4', 'flv', 'm4v', 'webm', 'ogv', 'ogg'] },
        { cate: "Compressed", ext: ['zip', 'rar', 'arj', 'gz', 'sit', 'sitx', 'sea', 'ace', 'bz2 ', '7z', 'tgz'] },
        { cate: "Photos", ext: ['png', 'jpg', 'tif', 'gif', 'bmp', 'jpeg', 'fax', 'cal', 'tga', 'tiff', 'jpe', 'img', 'ras', 'psd', 'wmf'] },
        { cate: "Programs", ext: ['exe', 'msi'] },
        { cate: "Documents", ext: ['xml', 'doc', 'pdf', 'ppt', 'pps', 'docx', 'docm', 'xls', 'xlsx', 'xlsm', 'pptx', 'pub'] }
    ];
$(document).ready(function () {


    //save options
    $('#saveBtn').on('click', function () {
        checkDuplicates($('#tbody tr td input.folder'));
        checkDuplicates($('#tbody tr td input.ext'));
        var dataList = [];
        $('#tbody tr').each(function () {
            currentrow = $(this);
            cate = currentrow.find(".folder").val();
            ext = currentrow.find(".ext").val().split(",");
            dataList.push({ cate: cate, ext: ext });
        });

       // console.log(dataList);
        if (dataList.length === 0) {
            saveData(defaults);
         }
         else{
        saveData(dataList);}

    });

    // jQuery button click event to add a row
    $('#addBtn').on('click', function () {
        addCategory();
    });

    // jQuery button click event to remove a row.
    $('#tbody').on('click', '.remove', function () {
        var child = $(this).closest('tr').nextAll();
        child.each(function () {
            var id = $(this).attr('id');
            var dig = parseInt(id.substring(1));
            $(this).attr('id', `R${dig - 1}`);
        });
        $(this).closest('tr').remove();
        rowIdx--;
    });

    //restore options
    restoreOptions();
    //restore functions.
});

function checkDuplicates(ele) {
    var content = {};
    $(ele).each(function () {
        if (content[$(this).val()]) {
            $(this).addClass("duplicate");
        } else {
            content[$(this).val()] = true;
        }

    });
}

function addCategory(el) {
    var temp = $('#template').clone().attr('id', 'R' + (rowIdx)++).appendTo('#tbody').show();
    if (el) {
        console.log("here");
        temp.find('.folder').val(el['cate']);
        temp.find('.ext').val(el['ext'].toString());
    }
}

function restoreOptions() {
    chrome.storage.sync.get({ option: defaults }, function (data) {
        data.option.forEach(addCategory);
        saveData(data.option);
    });
}
function saveData(dataL) {
    //console.log(dataL);
    chrome.storage.sync.set({ option: dataL }, function () {console.log(dataL); });
    //restoreOptions();
}