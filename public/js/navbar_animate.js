// import "js/loader.js";

alert("vxc");
console.log("fctctfctc");

topicBtn = $("#topics");
all_topic = $("#all_topics");
arrow = $("#arrow");

topicBtn.on("click", function () {
  all_topic.removeClass("invisible");
  arrow.removeClass("hidden");

  all_topic.slideToggle();
  arrow.slideToggle();

  console.log("fctctfctc");
});
