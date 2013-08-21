$(".navbar").waypoint(function(direction){
  if (direction === "down"){
    $(this).css({position: "fixed", top: "15px", left: "0px"});
    $(".topbar").css({display: "block"});
    $(".navbar-shadow").css({display: "block"})
  }
  else if (direction === "up"){
    $(this).css("position", "static");
    $(".topbar").css({display: "none"});
    $(".navbar-shadow").css({display: "none"})
  }
}, {offset: 15});

$(".project#lifestream").on("click", function(){
  $.smoothScroll({
    scrollTarget: "#project-lifestream"
  });
  return false;
})

$(".project#shuffle").on("click", function(){
  $.smoothScroll({
    scrollTarget: "#project-shuffle"
  });
  return false;
})

$(".project#helproku").on("click", function(){
  $.smoothScroll({
    scrollTarget: "#project-helproku"
  });
  return false;
})

$(".project#snake").on("click", function(){
  $.smoothScroll({
    scrollTarget: "#project-snake"
  });
  return false;
})

$(".project#asteroids").on("click", function(){
  $.smoothScroll({
    scrollTarget: "#project-asteroids"
  });
  return false;
})