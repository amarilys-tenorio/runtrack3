'use strict';

$("#button").click(function()
{
    for(var i = 0;i<=140;i++)
    {

        var alea = Math.floor((Math.random() * 6) + 1);
        $("#id" + alea).appendTo($("#melangees"));
        console.log(i);

    }

});

$("img").click(function()
{
$('#id').appendTo("#rangees");
});