$(function() {
  if (homeScreenButtons) {
    $(homeScreenButtons).each(function (i, v) {
      var link = $("<a>", {
        class: "btn-subscribe-home animated bounceIn",
        id: "hs-btn-" + i,
        href: v.url,
        text: v.name
      });
      if (v.class) {
        link.addClass(v.class);
      }
      if (v.target) {
        link.attr("target", v.target);
      }
      if (v.title) {
        link.attr("title", v.title);
      }
      link.appendTo("#btn-panel-home")
    });
  }
});
