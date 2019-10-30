// 탭메뉴 아이템 이미지 변경
$(".tab_menu > .wrap > a").mouseover(function() {
  $(this)
    .find("img")
    .attr(
      "src",
      $(this)
        .find("img")
        .attr("src")
        .replace("off", "on")
    );
});

$(".tab_menu > .wrap > a").mouseout(function() {
  $(this)
    .find("img")
    .attr(
      "src",
      $(this)
        .find("img")
        .attr("src")
        .replace("on", "off")
    );
  console.log(1);
});
