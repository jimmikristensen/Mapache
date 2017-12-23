$(function() {
  $(extraButtons).each(function(i, v) {
    console.log('NODE', i, v);
    var link = $("<a>", {
      class: "btn-subscribe-home animated bounceIn",
      id: "extra-btn-"+i,
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
});
