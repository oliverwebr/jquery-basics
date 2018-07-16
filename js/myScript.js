const $portfolioItems = $(".row .portfolio-item")

// Task 1
$portfolioItems.each((index, element) => {
  const $header = $(element).find("h4")
  const link = $header.children().attr("href")
  const $wrapTarget = $(element).children()
  $wrapTarget.wrap('<a href="' + link + '"> </a>')
})
