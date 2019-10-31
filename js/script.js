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

// --탭메뉴 아이템 이미지 변경--
$(".tab_menu > .wrap > a").mouseover(function() {
  $(this)
    .find("img")
    .attr(
      "src",
      $(this)
        .find("img")
        .attr("src")
        .replace("_off", "_on")
    );
  console.log(2);
});

$(".tab_menu > .wrap > a").mouseout(function() {
  $(this)
    .find("img")
    .attr(
      "src",
      $(this)
        .find("img")
        .attr("src")
        .replace("_on", "_off")
    );
  console.log(1);
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
  console.log(1);
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
