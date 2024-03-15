
$(document).ready(function(){
    $(".next").click(function(){
        var current_fs = $(this).parent();
        var next_fs = $(this).parent().next();

        // Check if it's the last step
        if (!next_fs.hasClass('submit')) {
            current_fs.hide();
            next_fs.show();
        }

        // Update progress
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    });

    $(".previous").click(function(){
        var current_fs = $(this).parent();
        var previous_fs = $(this).parent().prev();

        // Check if it's the first step
        if (!previous_fs.hasClass('submit')) {
            current_fs.hide();
            previous_fs.show();
        }

        // Update progress
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    });

});