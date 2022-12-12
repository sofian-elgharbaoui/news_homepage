let openMenuIcon = $(".open");
let closeMenuIcon = $(".close");
let ul = $("nav ul");

openMenuIcon.click(function () {
  ul.css("right", "0");

  closeMenuIcon.click(function () {
    ul.css("right", "-150px");
  });
});
