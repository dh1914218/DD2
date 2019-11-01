// --헤더고정--
$(window).scroll(function() {
  var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
  if (height > 0) {
    $("#header").addClass("fixed");
  } else if (height == 0) {
    $("#header").removeClass("fixed");
  }
});

// --메인슬라이드--
var swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 3000
  }
});

// --추천시공사례--
var swiper = new Swiper(".swiper-container2", {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

// --유저리뷰--
var swiper = new Swiper(".swiper-container3", {
  slidesPerView: 4,
  spaceBetween: 15,
  autoplay: {
    delay: 1500
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.4,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  }
});

// --뉴 아이템 이미지 변경--
$(".tab_menu > .wrap > a").mouseover(function() {
  if ($(this).hasClass("none") != true) {
    $(this)
      .find("img")
      .attr(
        "src",
        $(this)
          .find("img")
          .attr("src")
          .replace("_off", "_on")
      );
  }
});

$(".tab_menu > .wrap > a").mouseout(function() {
  if ($(this).hasClass("none") != true) {
    $(this)
      .find("img")
      .attr(
        "src",
        $(this)
          .find("img")
          .attr("src")
          .replace("_on", "_off")
      );
  }
});

// --WOW.js--
new WOW().init();

// --자주묻는질문--
// desc on&off , 섹션 화살표 변경
$(".question .tit").click(function() {
  $(this)
    .find(".desc")
    .slideToggle(200);

  $(this)
    .find(">img")
    .attr("src", function(index, attr) {
      if (attr.match("up")) {
        return attr.replace("up", "down");
      } else {
        return attr.replace("down", "up");
      }
    });
});

// topic리스트 on&off 및 화살표변경
$(".topic_form").click(function() {
  $(".topic_list").toggle();
  // : 자주묻는질문 form 리스트 토글

  $(".topic")
    .find("img")
    .attr("src", function(index, attr) {
      if (attr.match("up")) {
        return attr.replace("up", "down");
      } else {
        return attr.replace("down", "up");
      }
    });
  // 화살표 변경
});

// topic_form 텍스트 입력 및 섹션 none,block 및 화살표변경
var topicListIndex = 0;
$(".topic_list > div").click(function() {
  topicListIndex = $(this).index();

  if (topicListIndex == 0) {
    $(".topic_form").text("자재관련문의");
    $(".topic_list").toggle();
    $(".topic_list_section").hide();
    $(".topic_list_section1").show();
  } else if (topicListIndex == 1) {
    $(".topic_form").text("환불규정");
    $(".topic_list").toggle();
    $(".topic_list_section").hide();
    $(".topic_list_section2").show();
  } else if (topicListIndex == 2) {
    $(".topic_form").text("A/S과정");
    $(".topic_list").toggle();
  } else {
    $(".topic_form").text("하하하!!");
    $(".topic_list").toggle();
  }

  $(".topic")
    .find("img")
    .attr("src", function(index, attr) {
      if (attr.match("up")) {
        return attr.replace("up", "down");
      } else {
        return attr.replace("down", "up");
      }
    });
  // .text를 할경우 아예 초기화 된상태에서 text를 입력하므로 화살표도 다시 입력해줘야한다.
});

// --모바일 햄버거메뉴 on&off--
$(".m_menu_icon > a").click(function() {
  $(".m_backgorund_black").show();
  $(".m_nav").animate({
    marginLeft: "100%"
  });
});

$(".m_backgorund_black").click(function() {
  $(".m_backgorund_black").hide();
  $(".m_nav").animate({
    marginLeft: "-100%"
  });
});

// --모바일 네비게이션 드로어 서브메뉴 on&off--
$(".m_nav > .wrap").click(function() {
  $(this)
    .find(".m_nav_sub")
    .stop()
    .slideToggle();

  $(this)
    .find("img")
    .attr("src", function(index, attr) {
      if (attr.match("up")) {
        return attr.replace("up", "down");
      } else {
        return attr.replace("down", "up");
      }
    });
});

// --견적셀렉터--
// 공간구분
var selctorPlace = 0;
$(".place ul li").click(function() {
  selctorPlace = $(this).index();
  $(".place ul li").removeClass("box_active");
  $(this).addClass("box_active");

  if (selctorPlace == 1) {
    $(".place ul li")
      .eq(0)
      .css("border-right", "1px solid #3f3fff");
  }
});

// 면적구분
var selctorArea = 0;
$(".area >ul >li ").click(function() {
  selctorArea = $(this).index();
  $(".area >ul >li").removeClass("box_active");
  $(this).addClass("box_active");

  if (selctorArea == 1) {
    $(".area ul li")
      .eq(0)
      .css("border-right", "1px solid #3f3fff");
  }
});

$(".area .form2").click(function() {
  $(this)
    .find(".area_list")
    .stop()
    .toggle();
});

// 평수고르기 , 선택후 css
var space = "평";
var selctorAreaSpace = 0;
$(".area .form2 >ul >li").click(function() {
  selctorAreaSpace = $(this).index();
  $(".area .form2 .cover").text(selctorAreaSpace + 15 + text);

  $(".area .form2").css("border", "1px solid #111111");
  $(".area .form2").css("color", "#111111");
});

// 방개수 서브 on&off
$(".area .form3").click(function() {
  $(this)
    .find(".area_list")
    .stop()
    .toggle();
});

// 방개수고르기 , 선택후 css
var room = " 개";
var selctorAreaRoom = 0;
$(".area .form3 >ul >li").click(function() {
  selctorAreaRoom = $(this).index();
  $(".area .form3 .cover").text(selctorAreaRoom + room);

  $(".area .form3").css("border", "1px solid #111111");
  $(".area .form3").css("color", "#111111");
});

var col3Index = 0;
var text = "평";
var text2 = "개";
$(".selecteditem_list > div").click(function() {
  col3Index = $(this).index();
  console.log(col3Index);

  $(".selecteditem_tit").text(col3Index + 0 + text);
  $(".col3").css("border-color", "black");
});

// 배란다 확장여부
var selctorBananda = 0;
$(".bananda ul li").click(function() {
  selctorBananda = $(this).index();
  $(".bananda ul li").removeClass("box_active");
  $(this).addClass("box_active");

  if (selctorBananda == 1) {
    $(".bananda ul li")
      .eq(0)
      .css("border-right", "1px solid #3f3fff");
  }
});

// 빈집 , 공실여부
var selctorEmptyHouse = 0;
$(".empty_house ul li").click(function() {
  selctorEmptyHouse = $(this).index();
  $(".empty_house ul li").removeClass("box_active");
  $(this).addClass("box_active");

  if (selctorEmptyHouse == 1) {
    $(".empty_house ul li")
      .eq(0)
      .css("border-right", "1px solid #3f3fff");
  } else if (selctorEmptyHouse == 2) {
    $(".empty_house ul li")
      .eq(1)
      .css("border-right", "1px solid #3f3fff");

    $(".empty_house ul li")
      .eq(0)
      .css("border-right", "1px solid #b6b6b6");
  } else {
    $(".empty_house ul li")
      .eq(1)
      .css("border-right", "1px solid #b6b6b6");
  }
});

// 덧방여부
var selctoraddFloor = 0;
$(".add_floor ul li").click(function() {
  selctoraddFloor = $(this).index();
  $(".add_floor ul li").removeClass("box_active");
  $(this).addClass("box_active");

  if (selctoraddFloor == 1) {
    $(".add_floor ul li")
      .eq(0)
      .css("border-right", "1px solid #3f3fff");
  }
});

m_estimate_selector_result;
// 모바일 견적내기
$(".m_estimate_result").click(function() {
  console.log(1111);
  $(".m_estimate_selector_box").slideUp();
  $(".estimate_selector_wrap .m_arrow").show();
  $(".m_estimate_selector_result").show();
});

$("#m_estimate_selector_result").hide();

$(".estimate_selector h1").click(function() {
  $(".m_estimate_selector_box").slideDown();
  $(".estimate_selector_wrap .m_arrow").hide();
  $(".m_estimate_selector_result").hide();
});

$(".m_estimate_selector_result .warp .desc .btn").click(function() {
  $("#m_estimate_consult_request").animate({
    marginBottom: "0%"
  });
  $(".m_backgorund_black").show();

  console.log(1);
});

// 검은화면 클릭시
$(".m_backgorund_black").click(function() {
  $(".m_backgorund_black").hide();
  $("#m_estimate_consult_request").animate({
    marginBottom: "-10000%"
  });
});

// 레이어팝업에서 견적상담신청완료 후
$("#m_estimate_consult_request .btn").click(function() {
  $("#m_estimate_apply_sucess").show();

  $("#m_estimate_consult_request").animate({
    marginBottom: "-10000%"
  });
});
//
$("#m_estimate_apply_sucess").click(function() {
  $(location).attr("href", "index.html");
});

// 실제핸드폰으로 확인해보기
function windowSize() {
  var windowWidth = $(window).width();
  if (windowWidth > 600) {
    //창 가로 크기가 500 미만일 경우
    $(".m_estimate_selector_result").hide();
    // $(".m_estimate_selector_result").hide();
  } else {
    $(".m_estimate_selector_result").show();
  }
}

windowSize();

// $(".m_estimate_consult_request .btn").click(function() {});
