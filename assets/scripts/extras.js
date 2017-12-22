$(function() {
  $(extraButtons).each(function(i, v) {
    console.log('NODE', i, v);
    var link = $("<a>", {
      class: "btn-subscribe-home animated bounceIn",
      id: "extra-btn-"+i,
      href: v.url,
      text: v.name
    });
    console.log('LINK', link);
    if (v.icon) {
      document.styleSheets[0].insertRule("#extra-btn-"+i+"::before {content: "+v.icon+"}");
      document.styleSheets[0].insertRule("#test-btn-"+i+"::before {content: "+v.icon+"}");
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
