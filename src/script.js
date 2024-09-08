// ! index.html Start
$("#dropdownButton").click(() => {
    $("#dropdown").toggleClass("hidden");
});

$(".dropDownItems").click(function () {
    let data = $(this).html();
    console.log(data);
    $("#dropdownButton").html(data);
    $("#dropdown").fadeOut(200);
    $("#dropdownButton").click(() => {
        $("#dropdown").fadeIn(200);
    });
});
// ! index.html End

// ! adjust.html Start

// ? Desktop Tabbing Start
$(document).ready(function() {
    // Select all tab buttons and tab content sections
    let tabButtons = $(".adjustTabBtn");
    let tabContents = $(".adjustTabDetail");
  
    // Initially hide all tab contents (No tab is active)
    tabContents.hide();
    tabButtons.find(".vectorBorder").hide();
    tabButtons.find(".paratoggle").show()
  
    // Add click event for each tab button
    tabButtons.on("click", function() {
      // Remove active class from all buttons and hide all content
      tabButtons.find(".vectorBorder").hide();
      tabContents.hide();
      $("#mainTabingBox").removeClass("rounded-2xl")
      $("#mainTabingBox").addClass("rounded-t-2xl")
      tabButtons.find(".paratoggle").show()
  
      // Add active class to clicked button and show related content
      $(this).find(".vectorBorder").show();
      $(this).find(".paratoggle").hide()
      
      // Get the index of the clicked tab and display the corresponding content
      let tabIndex = tabButtons.index(this);
      tabContents.eq(tabIndex).fadeIn(); // Using slideDown for a smooth transition
      
    });
});
// ? Desktop Tabbing End

// ? Mobile Tabbing Start
$(".adjustmobiletabBtn").next().hide()
// $("#first").next().show()
$(".adjustFaqItems .adjustmobiletabBtn").click(function(){
    $(this).parent().find(".adjustMobileBtnContent").slideToggle()
    $(this).find(".editBtn").toggleClass("hidden");
    $(this).find(".tickBtn").toggleClass("hidden");     
    $(this).parent().siblings().find(".adjustMobileBtnContent").slideUp()
})
// ? Mobile Tabbing End

// ! adjust.html End

// ! adjust02.html Start

// ? Desktop Tabbing Start
$(document).ready(function() {
    // Select all tab buttons and tab content sections
    let tabButtons = $(".adjust02_TabBtn");
    let tabContents = $(".adjust02_tabContent");
  
     
    // Initially show the first tab and hide others
    tabButtons.first().addClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
    tabContents.first().show();
    tabContents.hide()
    $("#ConfirmBtn").hide()
  
    // Add click event for each tab button
    tabButtons.on("click", function() {
      // Remove active class from all buttons and hide all content
      tabButtons.removeClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
      tabContents.hide();
      $("#ConfirmBtn").show()
      $("#updateCharBtn").hide()
  
      // Add active class to clicked button and show related content
      $(this).addClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
      tabContents.eq($(this).index()).show();
    });
  });

//  ? Desktop Tabbing End

// ? Mobile Tabbing Start
$(".mobiletabBtn").next().hide()
// $("#first").next().show()
$(".faqItems .mobiletabBtn").click(function(){
    $(this).parent().find(".mobiletabContent").slideToggle()
    $(this).find(".editBtn").toggleClass("hidden");
    $(this).find(".tickBtn").toggleClass("hidden");     
    $(this).parent().siblings().find(".mobiletabContent").slideUp()
})
// ? Mobile Tabbing End
  
// ! adjust02.html End


// ! adjust03.html Start
$("#TaskBtn").click(()=>{
    $("#TaskBtn").html("Completed")
    $("#TaskBtn").addClass("bg-grey-2 text-grey-1 border-grey-2")
})

$("#completedCatBtn").toggleClass("before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]")
$("#allCatBtn").toggleClass("before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]")
$("#CompletedCatContent").hide()

$("#allCatBtn").click(()=>{
    $("#mobileAllCatContent").show()
    $("#CompletedCatContent").hide()
    $("#allCatBtn").toggleClass("before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]")
$("#completedCatBtn").removeClass("before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]")



})


$("#completedCatBtn").click(()=>{
    $("#CompletedCatContent").show()
    $("#mobileAllCatContent").hide()
$("#completedCatBtn").toggleClass("before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]")
$("#allCatBtn").removeClass("before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]")
})
// ! adjust03.html End

// ! reviewPackage.html Start

$(document).ready(function() {
    // Select all tab buttons and tab content sections
    let tabButtons = $(".reviewTabBtn");
    let tabContents = $(".reviewBtnContent");
  
    // Initially show the first tab and hide others
    tabButtons.first().addClass("before:w-full before:bg-turquoise before:absolute before:left-0 lg:before:bottom-[-50%] md:before:bottom-[-44%] before:bottom-[-12%] before:p-[1.5px]");
    tabContents.first().show();
  
    // Add click event for each tab button
    tabButtons.on("click", function() {
      // Remove active class from all buttons and hide all content
      tabButtons.removeClass("before:w-full before:bg-turquoise before:absolute before:left-0 lg:before:bottom-[-50%] md:before:bottom-[-44%] before:bottom-[-12%] before:p-[1.5px]");
      tabContents.hide();
  
      // Add active class to clicked button and show related content
      $(this).addClass("before:w-full before:bg-turquoise before:absolute before:left-0 lg:before:bottom-[-50%] md:before:bottom-[-44%] before:bottom-[-12%] before:p-[1.5px]");
      tabContents.eq($(this).index()).show();
    });
  });
  

// ! reviewPackage.html End