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

// file drag and drop
function fileValue(value) {
  var path = value.value;
  var extenstion = path.split(".").pop();
  if (
    extenstion == "jpg" ||
    extenstion == "svg" ||
    extenstion == "jpeg" ||
    extenstion == "png" ||
    extenstion == "gif"
  ) {
    document.getElementById("image-preview").src = window.URL.createObjectURL(
      value.files[0]
    );
    var filename = path
      .replace(/^.*[\\\/]/, "")
      .split(".")
      .slice(0, -1)
      .join(".");
    document.getElementById("filename").innerHTML = filename;
  } else {
    alert(
      "File not supported. Kindly Upload the Image of below given extension "
    );
  }
}

// notification
