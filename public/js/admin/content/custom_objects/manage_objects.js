/*

    Interface for managing custom objects of a certain type
    
    @author Blake Callens <blake.callens@gmail.com>
    @copyright PencilBlue 2014, All rights reserved

*/

var tableSort;

$(document).ready(function()
{
    new jNarrow('#custom_object_search', '.custom_object_row',
    {
        searchChildElement: '.custom_object_name',
        searchButton: '#custom_object_search_button',
        searchText: '<i class="fa fa-search"></i>',
        clearText: '<i class="fa fa-times"></i>',
    });
    
    tableSort = new TableSort(
    {
        table: '#custom_objects_table',
        rowClass: '.custom_object_row',
        sortFields:
        [
            {
                header: '#custom_object_name_header',
                textContainer: '.custom_object_name'
            },
            {
                header: '#custom_object_description_header',
                textContainer: '.custom_object_description'
            },
            {
                header: '#custom_object_date_header',
                textContainer: '.custom_object_date'
            }
        ]
    });
});

function initCustomObjectsPagination()
{
    pagination = new Pagination('custom_objects_pagination', '.custom_object_row', 30);
    $('#custom_object_search').keyup(pagination.initializeElements);
    $('#custom_object_search_button').click(pagination.initializeElements);
    
    tableSort.pagination = pagination;
}

function confirmDeleteCustomObject(objectTypeID, objectTypeName)
{
    $('#delete_name').html(objectTypeName);
    $('#delete_button').attr('onclick', 'window.location = "/actions/admin/content/custom_objects/delete_object?id=' + objectTypeID + '"');
    $('#confirm_delete_modal').modal({backdrop: 'static', keyboard: true});
}
