
$(document).ready(function () {
  $(".profile .icon_wrap").click(function () {
    $(this).parent().toggleClass("active");
    $(".notifications").removeClass("active");
  });

  $(".notifications .icon_wrap").click(function () {
    $(this).parent().toggleClass("active");
    $(".profile").removeClass("active");
  });

  $(".show_all .link").click(function () {
    $(".notifications").removeClass("active");
    $(".popup").show();
  });

  $(".close").click(function () {
    $(".popup").hide();
  });
});
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// to do list
/* TO DO LIST */
$(".tdl-new").bind("keypress", function (e) {
  var code = e.keyCode ? e.keyCode : e.which;
  if (code == 13) {
    var v = $(this).val();
    var s = v.replace(/ +?/g, "");
    if (s == "") {
      return false;
    } else {
      $(".tdl-content ul").append(
        "<li><label><input type='checkbox'><i></i><span>" +
          v +
          "</span><a href='#'>x</a></label></li>"
      );
      $(this).val("");
    }
  }
});

$(".tdl-content a").bind("click", function () {
  var _li = $(this).parent().parent("li");
  _li
    .addClass("remove")
    .stop()
    .delay(100)
    .slideUp("fast", function () {
      _li.remove();
    });
  return false;
});

// for dynamically created a tags
$(".tdl-content").on("click", "a", function () {
  var _li = $(this).parent().parent("li");
  _li
    .addClass("remove")
    .stop()
    .delay(100)
    .slideUp("fast", function () {
      _li.remove();
    });
  return false;
});
