$(function() {
  $(extraButtons).each(function(i, v) {
    console.log('NODE', i, v);
    $("cover-wrap-content").append(
      $("<a>", {
        class: "btn-subscribe-home animated bounceIn",
        id: "extra-btn-"+i,
        text: v.name
      })
    );
  });
});
