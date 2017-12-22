$(function() {
  $(extraButtons).each(function(i, v) {
    console.log('NODE', i, v);
    $("<a>", {
      class: "btn-extras-home animated bounceIn",
      id: "extra-btn-"+i,
      href: v.url,
      text: v.name
    }).appendTo("#btn-panel-home");
  });
});
