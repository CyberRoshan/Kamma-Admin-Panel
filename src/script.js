// ! Common Dropdown Start
$(document).ready(function () {
  // Toggle dropdown visibility on button click
  $(".dropdown-button").click(function () {
    var $dropdown = $(this).next(".dropdown");
    $(".dropdown").not($dropdown).addClass("hidden"); // Hide other open dropdowns
    $dropdown.toggleClass("hidden"); // Toggle visibility of current dropdown
  });

  // Handle dropdown item selection
  $(".dropDownItems").click(function () {
    let selectedText = $(this).html();
    console.log(selectedText);

    // Update the text of the corresponding dropdown button
    $(this)
      .closest(".dropdown-container")
      .find(".button-text")
      .html(selectedText);

    // Hide the dropdown after selecting an item
    $(this).closest(".dropdown").addClass("hidden");
  });

  // Close dropdown if clicked outside
  $(document).click(function (e) {
    if (!$(e.target).closest(".dropdown-container").length) {
      $(".dropdown").addClass("hidden"); // Hide all dropdowns when clicking outside
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

// ! Radio Button Start
$(document).ready(function () {
  $(".radio-btn").click(function () {
    $(".radio-btn")
      .removeClass("bg-coral text-white")
      .addClass("bg-transparent text-black");
    $(this)
      .addClass("bg-coral text-white")
      .removeClass("bg-transparent text-black");
  });
});

// ! Radio Button End

// ! Number Input box Start
$(document).ready(function () {
  $(".decrease").click(function () {
    var input = $(".quantity");
    var currentValue = parseInt(input.val());
    if (!isNaN(currentValue) && currentValue > parseInt(input.attr("min"))) {
      input.val(currentValue - 1);
    }
  });

  $(".increase").click(function () {
    var input = $(".quantity");
    var currentValue = parseInt(input.val());
    if (!isNaN(currentValue) && currentValue < parseInt(input.attr("max"))) {
      input.val(currentValue + 1);
    }
  });

  $(".quantity").focus(function () {
    $(this).select();
  });
});

// ! Number Input box End

// ! Radio Btn Card Start
$(document).ready(function () {
  $(".card").click(function () {
    $(".card").removeClass("border-coral").addClass("border-grey-2");
    $(".tick-icon").addClass("hidden");

    $(this).removeClass("border-grey-2").addClass("border-coral");
    $(this).find(".tick-icon").removeClass("hidden");
  });
});

// ! Radio Btn Card End

// ! Insulated Yes | No | Unknown Button Start
$(document).ready(function () {
  $(".option-btn").click(function () {
    $(".option-btn")
      .removeClass("bg-turquoise-rgba border-turquoise")
      .addClass("border-grey-2 text-black bg-transparent");

    $(this)
      .removeClass("border-grey-2 text-black bg-transparent")
      .addClass("bg-turquoise-rgba border-turquoise");
  });
});
// ! Insulated Yes | No | Unknown Button End

// ! Trash Button Pop Up Start
$(document).ready(function () {
  $(".trash-icon").on("click", function () {
    $("#popup").removeClass("hidden").addClass("flex");
  });

  $(".closePopup, .confirmDelete").on("click", function () {
    $("#popup").addClass("hidden");

    if ($(this).hasClass("confirmDelete")) {
      console.log("Item deleted");
    }
  });
});
// ! Trash Button Pop Up Start
// ! Info Button Pop Up Start
$(document).ready(function () {
  $(".info-icon").on("click", function () {
    $("#infoPopup").removeClass("hidden").addClass("flex");
  });

  $(".infoClosePopup").on("click", function () {
    $("#infoPopup").addClass("hidden");
  });
});
// ! Info Button Pop Up End

// ! Radio Set Goal Card Start
$(document).ready(function () {
  $(".GoalCard").click(function () {
    $(".GoalCard")
      .removeClass("border-turquoise opacity-[100%]")
      .addClass("border-[rgba(0, 0, 0, 0.13)] opacity-[50%]");

    $(this)
      .removeClass("border-[rgba(0, 0, 0, 0.13)] opacity-[50%]")
      .addClass("border-turquoise opacity-[100%]");
  });
});
// ! Radio Set Goal Card End

// ! Range Slider Start
$(document).ready(function () {
  const slider = $("#range-slider-val");
  const fill = $("#fill");
  const sliderHandle = $("#slider-handle");

  function applyFill() {
    // Calculate percentage of the range slider value
    const percentage =
      (100 * (slider.val() - slider.attr("min"))) /
      (slider.attr("max") - slider.attr("min"));

    // Update the fill width according to the percentage
    fill.css("width", `${percentage}%`);

    // Dynamically calculate handle position and ensure it's centered
    const handlePosition =
      (percentage / 100) * (slider.width() - sliderHandle.width());
    sliderHandle.css("left", `${handlePosition}px`);
  }

  // Apply the fill and handle positioning on input
  slider.on("input", applyFill);

  // Handle responsiveness when window resizes
  $(window).on("resize", applyFill);

  // Apply fill on initial load
  applyFill();
});
// ! Range Slider End