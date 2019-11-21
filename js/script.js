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
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev1"
  }
});

// --추천시공사례--
var swiper = new Swiper(".swiper-container2", {
  // slidesPerView: 3,
  // spaceBetween: 20,
  autoplay: {
    delay: 2500
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.2,
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
      slidesPerView: 1.2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  }
});

// --탭메뉴 아이콘 ON&OFF--
$(".tab_menu  .wrap > a").mouseover(function() {
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

$(".tab_menu  .wrap > a").mouseout(function() {
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

// ----------WOW.js----------
new WOW().init();

// ----------모바일 네비게이션드로어----------
// __드로어 on&off
$(".m_menu_icon > a").click(function() {
  $(".m_backgorund_black").show();
  $(".m_nav").animate({
    marginLeft: "100%"
  });
});

// __백그라운드
$(".m_backgorund_black").click(function() {
  $(".m_backgorund_black").hide();
  $(".m_nav").animate({
    marginLeft: "-100%"
  });
});

// __서브메뉴 on&off
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

// ----------자주묻는질문----------
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

// ----------견적셀렉터----------
// --예상견적확인버튼 btn 클릭시--
$(".estimate_selector .m_btn").click(function() {
  console.log(11);

  $(".estimate_result").show();
  $(".mixsale.estimate").slideDown();
  $(".m_blank20.a").slideDown();
  $(".mixsale_materials.estimate").slideDown();
  // ㄴ 밑에부분 show

  $(".m_estimate_selector_box").slideUp();
  // ㄴ 셀렉터박스 hide

  $(".m_arrow").show();
});

// --화삺표 클릭시--
$(".estimate_selector h1").click(function() {
  $(".estimate_result").slideUp();
  $(".mixsale.estimate").slideUp();
  $(".m_blank20.a").slideUp();
  $(".mixsale_materials.estimate").slideUp();
  // ㄴ 밑에부분 hide

  $(".m_estimate_selector_box").slideDown();
  // ㄴ 셀렉터박스 show

  $(".m_arrow").hide();
});

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

// 방개수 리스트 on&off
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

//배란다확장여부 on_off (index값은 전역변수 사용)
$(".place  ul li").click(function() {
  selctorPlace = $(this).index();
  if (selctorPlace == 0) {
    $(".estimate_selector_wrap.maru .bananda").show();
    $(".estimate_selector_wrap.dacotile .bananda").show();
  } else {
    $(".estimate_selector_wrap.maru .bananda").hide();
    $(".estimate_selector_wrap.dacotile .bananda").hide();
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

// 시공범위
var selctorbuildRange = 0;
$(".build_range ul li ").click(function() {
  selctorbuildRange = $(this).index();
  $(".build_range ul li").removeClass("box_active");
  $(this).addClass("box_active");

  if (selctorbuildRange == 1) {
    $(".build_range ul li")
      .eq(0)
      .css("border-right", "1px solid #3f3fff");
  }
});

//시공범위(거실만) on_off (index값은 공간구분 전역변수 사용)
$(".place  ul li").click(function() {
  selctorPlace = $(this).index();
  if (selctorPlace == 0) {
    $(".estimate_selector_wrap.maru .build_range").show();
    $(".estimate_selector_wrap.dacotile .build_range").show();
  } else {
    $(".estimate_selector_wrap.maru .build_range").hide();
    $(".estimate_selector_wrap.dacotile .build_range").hide();
  }
});

// 가구시공 플랜구분
var selctorFurniturePlan = 0;
$(".furniture_plan ul li").click(function() {
  selctorFurniturePlan = $(this).index();
  $(".furniture_plan ul li").removeClass("box_active");
  $(this).addClass("box_active");

  if (selctorFurniturePlan == 1) {
    $(".furniture_plan ul li")
      .eq(0)
      .css("border-right", "1px solid #3f3fff");
  }
});

// 가구시공면적구분
$(".furniture_area .cover").click(function() {
  $(this)
    .find("ul.area_list")
    .stop()
    .toggle();
});

// 가구시공면적 cm 고르기
var cm = "cm";
var selctorFurnitureArea = 0;
$(".furniture_area .form2 >ul >li").click(function() {
  selctorFurnitureArea = $(this).index();
  $(".furniture_area .form2 .cover").text(selctorFurnitureArea + 15 + cm);
});

// 싱크대 시공면적구분
$(".sink_area .form").click(function() {
  $(this)
    .find("ul.area_list")
    .stop()
    .toggle();
});

// 싱크대 시공면적 mm 고르기
var selctorSinkInnerText = 0;
$(".sink_area .form >ul >li").click(function() {
  selctorSinkInnerText = $(this).text();
  $(".sink_area .form .cover").text(selctorSinkInnerText);
  $(".sink_area .form").css("border", "1px solid #111111");
  $(".sink_area .form").css("color", "#111111");
});

// 화장실 시공면적구분
$(".toilet_area .form").click(function() {
  $(this)
    .find("ul.area_list")
    .stop()
    .toggle();
});

// 화장실 시공면적 mm 고르기
var selctorToiletInnerText = 0;
$(".toilet_area .form >ul >li").click(function() {
  selctorToiletInnerText = $(this).text();
  $(".toilet_area .form .cover").text(selctorToiletInnerText);
  $(".toilet_area .form").css("border", "1px solid #111111");
  $(".toilet_area .form").css("color", "#111111");
});

//시공사례 셀렉터 리스트 on&off
$(".build_review_selector >.wrap > .item").click(function() {
  $(this)
    .find(".list")
    .toggle();

  $(".build_review_selector >.wrap > .item")
    .not($(this))
    .find(".list")
    .hide();
});

// ----------시공사례-----------
// __드롭다운
let tagPlaceText = 0;
$(".build_review_selector_list.place > div").click(function() {
  tagPlaceText = $(this).text();

  // let tagInnerText = $(this).text();
  // let tagInnerHtml = `<div class="item_place">${tagInnerText}</div>`;
  // $(".build_review_selector_tag > .wrap > div.item_place").remove();
  // $(".build_review_selector_tag > .wrap").append(tagInnerHtml);

  $(".build_review_selector .place .cover").text(tagPlaceText);
});

let tagWorkingText = 0;
$(".build_review_selector_list.working > div").click(function() {
  tagWorkingText = $(this).text();

  // let tagInnerText = $(this).text();
  // let tagInnerHtml = `<div class="item_working">${tagInnerText}</div>`;

  // $(".build_review_selector_tag > .wrap > div.item_working").remove();
  // $(".build_review_selector_tag > .wrap").append(tagInnerHtml);

  $(".build_review_selector .working .cover").text(tagWorkingText);
});

let tagAreaText = 0;
$(".build_review_selector_list.area > div").click(function() {
  tagAreaText = $(this).text();

  // let tagInnerText = $(this).text();
  // let tagInnerHtml = `<div class="item_area">${tagInnerText}</div>`;

  // $(".build_review_selector_tag > .wrap > div.item_area").remove();
  // $(".build_review_selector_tag > .wrap").append(tagInnerHtml);

  $(".build_review_selector .area .cover").text(tagAreaText);
});

// -----------상담먼저----------//
// _클래스추가
$(".consultFirst").click(function() {
  $("#popUp_consultFirst").show();
});

// _취소버튼
$("#popUp_consultFirst img").click(function() {
  $("#popUp_consultFirst").hide();
});

// _견적신청버튼
$("#popUp_consultFirst .confirm_btn").click(function() {
  $("#popUp_consultFirst").hide();
});

// _개인정보보수집동의 더보기 클릭시
$("#popUp_consultFirst .wrap span").click(function() {
  $("#popUp_personal_data").show();
});

// _클래스추가 개인정보처리방침
$(".personalData").click(function() {
  $("#popUp_personal_data").show();
});

// __취소버튼
$("#popUp_personal_data .wrap img").click(function() {
  $("#popUp_personal_data").hide();
});

// ----------자재구경----------
//_자재종류 active
$(".materials_view_menu .cate_detail .type ul li").click(function() {
  $(".materials_view_menu .cate_detail .type ul li").removeClass(
    "materials_active"
  );
  $(this).addClass("materials_active");
});

//_브랜드 active
$(".materials_view_menu .cate_detail .brand ul li").click(function() {
  $(".materials_view_menu .cate_detail .brand ul li").removeClass(
    "materials_active"
  );
  $(this).addClass("materials_active");
});

//_색상 active
$(".materials_view_menu .cate_detail .color ul li").click(function() {
  $(".materials_view_menu .cate_detail .color ul li")
    .find("div")
    .removeClass("materials_text_active");
  $(this)
    .find("div")
    .addClass("materials_text_active");
});

//_모바일 자재종류 active
$(".m_cate_detail .type ul li").click(function() {
  $(".m_cate_detail .type ul li").removeClass("materials_active");
  $(this).addClass("materials_active");
});

//_모바일 브랜드 active
$(".m_cate_detail .brand ul li").click(function() {
  $(".m_cate_detail .brand ul li").removeClass("materials_active");
  $(this).addClass("materials_active");
});
//_모바일 색상 active
$(".m_cate_detail .color ul li").click(function() {
  console.log(1);

  $(".m_cate_detail .color ul li")
    .find(">div")
    .removeClass("materials_text_active");
  $(this)
    .find(">div")
    .addClass("materials_text_active");
});

// _모바일 화살표 클릭시 슬라이드
$(".m_cate_detail h1").click(function() {
  $(".m_wrap").slideToggle();
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

// _데코타일 종류별 색상 on_Off\
var dacotileTypeIndex = 0;
$(".dacotile .type ul li").click(function() {
  dacotileTypeIndex = $(this).index();
  console.log(dacotileTypeIndex);

  if (dacotileTypeIndex == 1) {
    $(".dacotile .color .dacotile_color1").show();
    $(".dacotile .color .dacotile_color2").hide();
    $(".dacotile .color .dacotile_color3").hide();
  } else if (dacotileTypeIndex == 2) {
    $(".dacotile .color .dacotile_color1").hide();
    $(".dacotile .color .dacotile_color2").show();
    $(".dacotile .color .dacotile_color3").hide();
  } else if (dacotileTypeIndex == 3) {
    $(".dacotile .color .dacotile_color1").show();
    $(".dacotile .color .dacotile_color2").hide();
    $(".dacotile .color .dacotile_color3").hide();
  } else if (dacotileTypeIndex == 4) {
    $(".dacotile .color .dacotile_color1").hide();
    $(".dacotile .color .dacotile_color2").hide();
    $(".dacotile .color .dacotile_color3").show();
  } else {
    $(".dacotile .color .dacotile_color1").show();
    $(".dacotile .color .dacotile_color2").show();
    $(".dacotile .color .dacotile_color3").show();
  }
});
if ($(".dacotile .type ul li").hasClass("materials_active")) {
}

// 핸드폰번호 자동하이픈
$(".phone").keydown(function(event) {
  var key = event.charCode || event.keyCode || 0;
  $text = $(this);
  if (key !== 8 && key !== 9) {
    if ($text.val().length === 3) {
      $text.val($text.val() + "-");
    }
    if ($text.val().length === 8) {
      $text.val($text.val() + "-");
    }
  }

  return (
    key == 8 ||
    key == 9 ||
    key == 46 ||
    (key >= 48 && key <= 57) ||
    (key >= 96 && key <= 105)
  );
});

// --믹스상품자재--
let mixsaleMaterialsIndex = 0;

// _탭 active
// _탭클릭시 해당 자재 나오게하기

$(".mixsale_materials .tab > ul > li").click(function() {
  mixsaleMaterialsIndex = $(this).index();

  $(".mixsale_materials .tab > ul > li").removeClass("active_mix_sale");
  $(this).addClass("active_mix_sale");

  if (mixsaleMaterialsIndex == 0) {
    $(".mixsale_materials .materials_veiw .materials_maru").show();
    $(".mixsale_materials .materials_veiw .materials_linoleum").show();
    $(".mixsale_materials .materials_veiw .materials_dacotile").show();
    $(".mixsale_materials .materials_veiw .materials_paper").show();
  } else if (mixsaleMaterialsIndex == 1) {
    $(".mixsale_materials .materials_veiw .materials_maru").show();
    $(".mixsale_materials .materials_veiw .materials_linoleum").hide();
    $(".mixsale_materials .materials_veiw .materials_dacotile").hide();
    $(".mixsale_materials .materials_veiw .materials_paper").hide();
  } else if (mixsaleMaterialsIndex == 2) {
    $(".mixsale_materials .materials_veiw .materials_maru").hide();
    $(".mixsale_materials .materials_veiw .materials_linoleum").show();
    $(".mixsale_materials .materials_veiw .materials_dacotile").hide();
    $(".mixsale_materials .materials_veiw .materials_paper").hide();
  } else if (mixsaleMaterialsIndex == 3) {
    $(".mixsale_materials .materials_veiw .materials_maru").hide();
    $(".mixsale_materials .materials_veiw .materials_linoleum").hide();
    $(".mixsale_materials .materials_veiw .materials_dacotile").show();
    $(".mixsale_materials .materials_veiw .materials_paper").hide();
  } else {
    $(".mixsale_materials .materials_veiw .materials_maru").hide();
    $(".mixsale_materials .materials_veiw .materials_linoleum").hide();
    $(".mixsale_materials .materials_veiw .materials_dacotile").hide();
    $(".mixsale_materials .materials_veiw .materials_paper").show();
  }
});

// ---------- 맨위로 올라가기 goTop----------

function goTop() {
  $("html").scrollTop(0);
}

$(window).scroll(function() {
  var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
  if (height > 0) {
    $(".go_top").fadeIn();
  } else {
    $(".go_top").fadeOut();
  }
});

// if (height > 0) {
//   $("#header").addClass("fixed");
// } else if (height == 0) {
//   $("#header").removeClass("fixed");
// }

// --기타--
// _방염벽지 클릭시
// let paperTypeIndex = 0;
// $(".cate_detail.paper .type ul li").click(function() {
//   paperTypeIndex = $(this).index();
//   if (paperTypeIndex == 4) {
//     $("#materials_veiw").hide();
//     $("#resist_div").show();
//   } else {
//     $("#materials_veiw").show();
//     $("#resist_div").hide();
//   }
// });

// 시공후기 셀렉터 리스트 클릭시 태그 발생
// $(".build_review_selector_list > div").click(function() {
//   let innerText = $(this).text();
//   let innerHtml = `<div class="item">${innerText}</div>`;
//   let innerImg = `<img src="img/error.png"/>`;

//   $(".build_review_selector_tag >.wrap ").append(innerHtml);
//   $(".build_review_selector_tag >.wrap >.item").append(innerImg);

//   $(".build_review_selector_tag .wrap div").click(function() {
//     $(this).hide();
//   });
// });
