;(function () {
    documentReady(function () {
        var linkables = document.getElementsByClassName("linkable")
        for (var i = 0; i < linkables.length; i++) {
            var linkable = linkables[i]
            linkable.style.cursor = "pointer"
            linkable.addEventListener("click", function () {
                location.href = this.getAttribute("data-href")
            })
        }
    })

    function documentReady(fn) {
        if (document.readyState !== 'loading') {
            fn()
        } else {
            document.addEventListener('DOMContentLoaded', fn)
        }
    }
})()