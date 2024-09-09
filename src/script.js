// ! Common Dropdown Start
$(document).ready(function () {
  // Toggle dropdown visibility on button click
  $(".dropdown-button").click(function () {
    var $dropdown = $(this).next(".dropdown");
    $(".dropdown").not($dropdown).addClass("hidden"); // Hide other open dropdowns
    $dropdown.toggleClass("hidden");  // Toggle visibility of current dropdown
  });

  // Handle dropdown item selection
  $(".dropDownItems").click(function () {
    let selectedText = $(this).html();
    console.log(selectedText);
    
    // Update the text of the corresponding dropdown button
    $(this).closest(".dropdown-container").find(".button-text").html(selectedText);

    // Hide the dropdown after selecting an item
    $(this).closest(".dropdown").addClass("hidden");
  });

  // Close dropdown if clicked outside
  $(document).click(function (e) {
    if (!$(e.target).closest('.dropdown-container').length) {
      $(".dropdown").addClass("hidden");  // Hide all dropdowns when clicking outside
    }
  });
});

// ! Common Dropdown End

// ! adjust.html Start

// ? Desktop Tabbing Start
$(document).ready(function () {
  let tabButtons = $(".adjustTabBtn");
  let tabContents = $(".adjustTabDetail");

  tabContents.hide();
  tabButtons.find(".vectorBorder").hide();
  tabButtons.find(".paratoggle").show();

  tabButtons.on("click", function () {
    tabButtons.find(".vectorBorder").hide();
    tabContents.hide();
    $("#mainTabingBox").removeClass("rounded-2xl");
    $("#mainTabingBox").addClass("rounded-t-2xl");
    tabButtons.find(".paratoggle").show();

    $(this).find(".vectorBorder").show();
    $(this).find(".paratoggle").hide();

    let tabIndex = tabButtons.index(this);
    tabContents.eq(tabIndex).fadeIn();
  });
});
// ? Desktop Tabbing End

// ? Mobile Tabbing Start
$(".adjustmobiletabBtn").next().hide();
// $("#first").next().show()
$(".adjustFaqItems .adjustmobiletabBtn").click(function () {
  $(this).parent().find(".adjustMobileBtnContent").slideToggle();
  $(this).find(".editBtn").toggleClass("hidden");
  $(this).find(".tickBtn").toggleClass("hidden");
  $(this).parent().siblings().find(".adjustMobileBtnContent").slideUp();
});
// ? Mobile Tabbing End

// ! adjust.html End

// ! adjust02.html Start

// ? Desktop Tabbing Start
$(document).ready(function () {
  let tabButtons = $(".adjust02_TabBtn");
  let tabContents = $(".adjust02_tabContent");

  tabButtons
    .first()
    .addClass(
      "before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5"
    );
  tabContents.first().show();
  tabContents.hide();
  $("#ConfirmBtn").hide();

  tabButtons.on("click", function () {
    tabButtons.removeClass(
      "before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5"
    );
    tabContents.hide();
    $("#ConfirmBtn").show();
    $("#updateCharBtn").hide();

    $(this).addClass(
      "before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5"
    );
    tabContents.eq($(this).index()).show();
  });
});

//  ? Desktop Tabbing End

// ? Mobile Tabbing Start
$(".mobiletabBtn").next().hide();
// $("#first").next().show()
$(".faqItems .mobiletabBtn").click(function () {
  $(this).parent().find(".mobiletabContent").slideToggle();
  $(this).find(".editBtn").toggleClass("hidden");
  $(this).find(".tickBtn").toggleClass("hidden");
  $(this).parent().siblings().find(".mobiletabContent").slideUp();
});
// ? Mobile Tabbing End

// ! adjust02.html End

// ! adjust03.html Start
$("#TaskBtn").click(() => {
  $("#TaskBtn").html("Completed");
  $("#TaskBtn").addClass("bg-grey-2 text-grey-1 border-grey-2");
});

$("#completedCatBtn").toggleClass(
  "before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]"
);
$("#allCatBtn").toggleClass(
  "before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]"
);
$("#CompletedCatContent").hide();

$("#allCatBtn").click(() => {
  $("#mobileAllCatContent").show();
  $("#CompletedCatContent").hide();
  $("#allCatBtn").toggleClass(
    "before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]"
  );
  $("#completedCatBtn").removeClass(
    "before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]"
  );
});

$("#completedCatBtn").click(() => {
  $("#CompletedCatContent").show();
  $("#mobileAllCatContent").hide();
  $("#completedCatBtn").toggleClass(
    "before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]"
  );
  $("#allCatBtn").removeClass(
    "before:w-full before:bg-turquoise before:absolute before:left-0 before:bottom-[-50%] before:p-[1.5px]"
  );
});
// ! adjust03.html End

// ! reviewPackage.html Start

$(document).ready(function () {
  let tabButtons = $(".reviewTabBtn");
  let tabContents = $(".reviewBtnContent");

  tabButtons
    .first()
    .addClass(
      "before:w-full before:bg-turquoise before:absolute before:left-0 lg:before:bottom-[-50%] md:before:bottom-[-44%] before:bottom-[-12%] before:p-[1.5px]"
    );
  tabContents.first().show();

  tabButtons.on("click", function () {
    tabButtons.removeClass(
      "before:w-full before:bg-turquoise before:absolute before:left-0 lg:before:bottom-[-50%] md:before:bottom-[-44%] before:bottom-[-12%] before:p-[1.5px]"
    );
    tabContents.hide();

    $(this).addClass(
      "before:w-full before:bg-turquoise before:absolute before:left-0 lg:before:bottom-[-50%] md:before:bottom-[-44%] before:bottom-[-12%] before:p-[1.5px]"
    );
    tabContents.eq($(this).index()).show();
  });
});

// ! reviewPackage.html End