$(document).ready(function () {

    var rowIdx = 0;
    $('#saveBtn').on('click', function () {
        var content = {};
        checkDuplicates($('#tbody tr td input.folder'));
        checkDuplicates($('#tbody tr td input.ext'));
    });


    // jQuery button click event to add a row
    $('#addBtn').on('click', function () {
        // Adding a row inside the tbody.
        $('#tbody').append(`<tr  id="R${++rowIdx}">
           <td class="r">
           <input type="text" class="folder "  value="" placeholder="(Type Folder name)">
           </td>
           <td >
           <input type="text" class="ext" value="" placeholder="(Separate multiple file extensions with comma)">
            <td class="text-center">
              <button class="btn btn-danger remove"
                type="button">Remove</button>
              </td>
            </tr>`);
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
});
function checkDuplicates(ele){
    var content = {};
    $(ele).each(function () {
        if (content[$(this).val()]) {
            $(this).addClass("duplicate");
        } else {
            content[$(this).val()] = true;
        }

    });
}