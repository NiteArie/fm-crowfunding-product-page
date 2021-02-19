(() => {
    const backProjectButton = document.querySelector(".js-back");
    const bookmarkProjectButton = document.querySelector(".js-bookmark");
    const bookmarkProjectImage = document.querySelector(".js-bookmark-img");

    var bookmarked = false;

    bookmarkProjectButton.addEventListener("click", (event) => {

        bookmarked = !bookmarked;

        if (bookmarked) {
            changeBookmarkButtonToSuccess();
        } else {
            changeBookMarkButtonToNormal();
        }
    })

    function changeBookmarkButtonToSuccess() {
        bookmarkProjectButton.classList.add("welcome__action--bookmarked");
        bookmarkProjectImage.classList.add("welcome__bookmark--bookmarked");
    }

    function changeBookMarkButtonToNormal() {
        bookmarkProjectButton.classList.remove("welcome__action--bookmarked");
        bookmarkProjectImage.classList.remove("welcome__bookmark--bookmarked");
    }
})();