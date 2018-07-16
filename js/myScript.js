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
