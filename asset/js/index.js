$(function(){

    
    
  /**
   * 
   * 상단 메뉴 gnb (마우스)
   *
   * @version 1.0.0
   * @since 
   * @author 
   * @pram
   */    
  $('.gnb .gnb-item').mouseover(function(){
    isSub = $(this).find('.sub-list').length;

    if(isSub){
      $(this).find('.sub-list').addClass('active');
      $('.header').addClass('active');
    }
  });

  $('.gnb .gnb-item').mouseleave(function(){
    $('.header, .sub-list').removeClass('active');
  });



/**
 * 
 * 언어선택
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */    
    $('#lang').click(function(){
      $('.btn-lang').toggleClass('click');
   });



/**
 * 
 * 검색영역 
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */     
   $('.select').change(function(){
      $(this).addClass('active')
   });


    
/**
 * 
 * 메인 비주얼
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */    
  const visualSwiper = new Swiper(".visual-slide", {
      spaceBetween: 0,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
  });



/**
 * 
 * People
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */      
  const peopleSwiper = new Swiper(".people-slide", {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1230: {
          slidesPerView: 1.1,
          spaceBetween: 30,
        },
      }
    });



/**
 * 
 * benefits
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */ 
  const beneSwiper = new Swiper(".bene-slide", {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });
    
    

/**
 * 
 * footer 관련 사이트
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */     
$('.title').click(function(){
  $('.site-group').toggleClass('click');
});
  



/**
 * 
 * 반응형 메뉴
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */     

$('.btn-menu').click(function(){
  $(this).toggleClass('close');
  $('.menu-open').toggleClass('on');  
});

$('.menu-open .link-item').click(function(e){
  e.preventDefault();

  $(this).siblings('.sub-menu-list').slideToggle();
  $(this).toggleClass('click');

});


    
    
/**
 * 
 * 반응형 검색메뉴
 *
 * @version 1.0.0
 * @since 
 * @author 
 * @pram
 */  
$('.search-area-min').click(function(e){
  e.preventDefault();

  $(this).siblings('.search-menu').addClass('on');
  $('body').addClass('overflow');
  $('.header').addClass('hide');
});
$('.search-menu .link-item').click(function(e){
  e.preventDefault();

  $(this).siblings('.sub-list').slideToggle();
});

$('.search-menu .sub-link').click(function(e){
  e.preventDefault();

  $(this).siblings('.sub2-list').slideToggle();
});
$('.search-menu .close').click(function(e){
  e.preventDefault();

  $('.search-menu').removeClass('on');
  
  if($('input').is(":checked")) {
    $('input').prop('checked',false)
  };

  if( $('.search-menu .sub-list').slideDown() ){
    $('.search-menu .sub-list').slideUp();

  };

  if( $('.search-menu .sub2-list').slideDown() ){
    $('.search-menu .sub2-list').slideUp();

  };
   
  $('body').removeClass('overflow');
  $('.header').removeClass('hide');
});


$(document).ready(function(){
  // Tec
  $('#techall').click(function(){
    if($('#techall').is(":checked")) {
      $('input[name=tech]').prop('checked',true)
    } else {
      $('input[name=tech]').prop('checked', false)
    } 
  });

  $('input[name=tech]').click(function(){
    const techTotal = $('input[name=tech]').length;
    const techChecked = $('input[name=tech]:checked').length;

    if (techTotal != techChecked ) {
      $('#techall').prop('checked', false)
    } else {
      $('#techall').prop('checked', true)
    } 
  });


    // Design
  $('#designall').click(function(){
    if($('#designall').is(":checked")) {
      $('input[name=design]').prop('checked',true)
    } else {
      $('input[name=design]').prop('checked', false)
    } 
  });

  $('input[name=design]').click(function(){
    const designTotal = $('input[name=design]').length;
    const designChecked = $('input[name=design]:checked').length;

    if (designTotal != designChecked ) {
      $('#designall').prop('checked', false)
    } else {
      $('#designall').prop('checked', true)
    } 
  });


  // Service & Business
  $('#sball').click(function(){
    if($('#sball').is(":checked")) {
      $('input[name=servicebusiness]').prop('checked',true)
    } else {
      $('input[name=servicebusiness]').prop('checked', false)
    } 
  });
  
  $('input[name=servicebusiness]').click(function(){
    const sbTotal = $('input[name=servicebusiness]').length;
    const sbChecked = $('input[name=servicebusiness]:checked').length;

    if (sbTotal != sbChecked ) {
      $('#sball').prop('checked', false)
    } else {
      $('#sball').prop('checked', true)
    } 
  });


  // Corporate
  $('#corporateall').click(function(){
    if($('#corporateall').is(":checked")) {
      $('input[name=corporate]').prop('checked',true)
    } else {
      $('input[name=corporate]').prop('checked', false)
    } 
  });

  $('input[name=corporate]').click(function(){
    const corpTotal = $('input[name=corporate]').length;
    const corpChecked = $('input[name=corporate]:checked').length;

    if (corpTotal != corpChecked ) {
      $('#corporateall').prop('checked', false)
    } else {
      $('#corporateall').prop('checked', true)
    } 
  });


  
  // 전체선택 해제
  $('#clear-btn').click(function(e){
    e.preventDefault();

    if($('input').is(":checked")) {
      $('input').prop('checked',false)
    }

  });
});








    
});
    
