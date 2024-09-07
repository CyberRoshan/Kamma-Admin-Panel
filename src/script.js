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

// ! Type of Property Detail Section Start

$("#adjustTabbingBox").addClass("md:rounded-lg");
$("#navGreyLine").removeClass("lg:block hidden border-b-2 b border-grey-2 w-full absolute top-[75%] left-0");
$("#typeOfProperty").removeClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
$("#TypePropertyDetailSection").fadeOut();
$("#AgePropertyDetailSection").hide();
$("#FloorAreaDetailSection").hide();
$("#p1").removeClass("hidden");
$("#svg1").removeClass("lg:hidden");

$("#typeOfProperty").click(() => {
    $("#TypePropertyDetailSection").fadeIn();
    $("#AgePropertyDetailSection").hide();
    $("#FloorAreaDetailSection").hide();
    $("#adjustTabbingBox").removeClass("md:rounded-lg");
    $("#navGreyLine").addClass("lg:block hidden border-b-2 b border-grey-2 w-full absolute top-[75%] left-0");
    $("#typeOfProperty").addClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
    $("#ageOfProperty").removeClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
    $("#FloorArea").removeClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
    $("#p1").addClass("hidden");
    $("#svg1").addClass("lg:hidden");
    $("#p2").removeClass("hidden");
    $("#svg2").removeClass("lg:hidden");
    $("#p3").removeClass("hidden");
    $("#svg3").removeClass("lg:hidden");
});

// $(".propertySelection").click(()=>{
//     $(".propertySelection")
// })
// ! Type of Property Detail Section End
// ! Age of Property Detail Section Start
$("#ageOfProperty").click(() => {
    $("#ageOfProperty").addClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
    $("#typeOfProperty").removeClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
    $("#FloorArea").removeClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
    $("#TypePropertyDetailSection").hide();
    $("#FloorAreaDetailSection").hide();
    $("#AgePropertyDetailSection").fadeIn();
    $("#p2").addClass("hidden");
    $("#svg2").addClass("lg:hidden");
    $("#p1").removeClass("hidden");
    $("#svg1").removeClass("lg:hidden");
    $("#p3").removeClass("hidden");
    $("#svg3").removeClass("lg:hidden");
});
// ! Age of Property Detail Section End
// ! Floor Area Detail Section Start
$("#FloorArea").click(() => {
    $("#FloorArea").addClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
    $("#typeOfProperty").removeClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
    $("#ageOfProperty").removeClass("before:w-full before:bg-turquoise md:before:block before:hidden before:absolute before:left-0 before:top-[103%] before:p-0.5");
    $("#TypePropertyDetailSection").hide();
    $("#AgePropertyDetailSection").hide();
    $("#FloorAreaDetailSection").fadeIn();
    $("#p2").removeClass("hidden");
    $("#svg2").removeClass("lg:hidden");
    $("#p1").removeClass("hidden");
    $("#svg1").removeClass("lg:hidden");
    $("#p3").addClass("hidden");
    $("#svg3").addClass("lg:hidden");
});
// ! Floor Area Detail Section End


// ! adjust.html End


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