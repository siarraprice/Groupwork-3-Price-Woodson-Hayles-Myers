document.ready(function() {
  ("#lg-logo").hide();
  ("#lg-logo").load(function(event) {
    event.preventDefault();
    ("#lg-logo").fadein(3000)
  }
});
