const $portfolioItems = $(".row .portfolio-item")

// Task 1
$portfolioItems.each((index, element) => {
  const $header = $(element).find("h4")
  const link = $header.children().attr("href")
  const $wrapTarget = $(element).children()
  $wrapTarget.wrap('<a href="' + link + '"> </a>')
})

// Task 2
$portfolioItems.mouseenter(function() {
  $(this).css({ transition: "all .5s" })
  $(this).css({ transform: "scale(1.05)" })
})

$portfolioItems.mouseleave(function() {
  $(this).css({ transform: "scale(1)" })
})

// Task3
$("body").prepend(
  `<div id='cookie'>
      This website uses Cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners whi may combine it with other information that you've provided to them or that they've collevted from your use of their devices. You consent to our Cookies if you continue to use this website. 
      <button>OK</button>
    </div>`
)
$("#cookie").css({
  position: "fixed",
  bottom: "0",
  maxWidth: "600px",
  padding: "8px",
  right: 0,
  zIndex: 1020,
  backgroundColor: "#fff",
  boxShadow: "-5px -5px 110px -28px #000"
})
$("#cookie button").click(function() {
  $("#cookie").remove()
})
