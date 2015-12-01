function show(c_Str) {
    if (document.getElementById(c_Str).className == '') {
        document.getElementById(c_Str).className = "open";
    }
    else if (document.getElementById(c_Str).className == 'open') {
        document.getElementById(c_Str).className = "";
    }
    else if (document.getElementById(c_Str).className == 'active') {
        document.getElementById(c_Str).className = "active open";
    }
    else if (document.getElementById(c_Str).className == 'active open') {
        document.getElementById(c_Str).className = "active";
    }
}

// toggle left-menu
$(function() {
      $(".toggler").first().click(function() {
              if($(window).width() < 967) {
                   $(".toggled").first().toggle(0);
                  if($("[data-control='toggle']").first().attr("class") == "wa-navigationLeft")
                    $("[data-control='toggle']").first().attr("class", "wa-navigationLeft open");
                  else
                    $("[data-control='toggle']").first().attr("class", "wa-navigationLeft");
              }
                
      }); 
})

// reshow left-menu
$(window).resize(function() {
    if ($(window).width() >= 968) {
        $(".toggled").removeAttr('style');
    };
});