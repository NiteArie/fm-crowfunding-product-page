(() => {
    const backProjectButton = document.querySelector(".js-back");
    const bookmarkProjectButton = document.querySelector(".js-bookmark");
    const bookmarkProjectImage = document.querySelector(".js-bookmark-img");

    const modal = document.querySelector(".js-modal");
    const modalBackground = document.querySelector(".js-modal-bg");

    var bookmarked = false;
    var modalHiddenState = true;

    bookmarkProjectButton.addEventListener("click", (event) => {

        bookmarked = !bookmarked;

        if (bookmarked) {
            changeBookmarkButtonToSuccess();
        } else {
            changeBookMarkButtonToNormal();
        }
    })

    backProjectButton.addEventListener("click", (event) => {
        modalHiddenState = !modalHiddenState;

        if ( !modalHiddenState ) {
            showModal();
        } else {
            hideModal();
        }
    });

    function changeBookmarkButtonToSuccess() {
        bookmarkProjectButton.classList.add("welcome__action--bookmarked");
        bookmarkProjectImage.classList.add("welcome__bookmark--bookmarked");
    }

    function changeBookMarkButtonToNormal() {
        bookmarkProjectButton.classList.remove("welcome__action--bookmarked");
        bookmarkProjectImage.classList.remove("welcome__bookmark--bookmarked");
    }

    function showModal() {
        console.log("WTF");
        modal.classList.remove("modal--hidden");
        modalBackground.classList.remove("background--hidden");
    }

    function hideModal() {
        modal.classList.add("modal--hidden");
        modalBackground.classList.add("background--hidden");
    }
})();