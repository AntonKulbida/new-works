$(document).ready(function () {
    size_li = $("#myList2 li").size();
    x=6
    $('#myList2 li:lt('+x+')').show();
    $('#loadMore2').click(function () {
        x= (x+2 <= size_li) ? x+2 : size_li;
        $('#myList2 li:lt('+x+')').show();
    });
    $('#showLess').click(function () {
        x=(x-2<0) ? 2 : x-2;
        $('#myList2 li').not(':lt('+x+')').hide();
    });
});