// alert("linked");

// $(document).ready(function() {});

// $(".explore").addClass("animated bounce");
// $(".explore").one(
//   "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
//   function() {
//     $(".explore").addClass("delay fadeOutRight");
//   }
// );
// $(".pause").addClass("animated bounce");
// $(".pause").one(
//   "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
//   function() {
//     $(".pause").addClass("delay zoomOutDown");
//   }
// );

$(".bounce").addClass("animated bounce");
$(".bounce").one(
  "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
  function() {
    $(".bounce").addClass("delay zoomOutDown");
  }
);
