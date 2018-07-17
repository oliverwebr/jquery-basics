;(function($, document, undefined) {
  $(document).ready(function() {
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

    // Task 4
    const $placeHolderImages = $(".row .portfolio-item .card-img-top")

    $placeHolderImages.each((index, ele) => {
      // Just replacing the src with the random link is a
      // totally valid solution
      // $image.attr("src", "https://source.unsplash.com/random")

      // But this is how we can deal with Blobs (Binary large objects) in this case a image.
      $.ajax({
        type: "GET",
        url: "https://source.unsplash.com/random",
        xhr: function() {
          const xhr = new XMLHttpRequest()
          xhr.responseType = "blob"
          return xhr
        },
        success: function(data) {
          const img = $(ele)
          const url = window.URL || window.webkitURL
          img.attr("src", url.createObjectURL(data))
        }
      })
    })

    // Task 5
    $("body").append(`
      <div id="bestModalInThisWorldForSure" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
            </div>
          </div>
        </div>
      </div>
    `)

    $portfolioItems.click(function(e) {
      e.preventDefault()
      const $modal = $("#bestModalInThisWorldForSure")
      const $modalTitle = $modal.find(".modal-title")
      const $modalBody = $modal.find(".modal-body")

      // empty modal
      $modalTitle.empty()
      $modalBody.empty()

      // Get values from clicked portfolio Item
      const $image = $(this)
        .find("img")
        .clone()
      const $title = $(this).find(".card-title a")

      // Fill Modal
      $modalTitle.text($title[0].text)
      $modalBody.append($image)

      // Show
      $modal.modal("show")
    })
  })
})(jQuery, document)
