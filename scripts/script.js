(() => {
    const backProjectButton = document.querySelector(".js-back");
    const bookmarkProjectButton = document.querySelector(".js-bookmark");
    const bookmarkProjectImage = document.querySelector(".js-bookmark-img");

    const modal = document.querySelector(".js-modal");
    const modalBackground = document.querySelector(".js-modal-bg");
    const pledges = Array.from(document.querySelectorAll(".js-pledge"));

    const checkBoxElements = Array.from(document.querySelectorAll(".js-check"));

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

    pledges.forEach((pledge) => {
        pledge.addEventListener("click", function (event) {

            clearCheckboxElements();

            let checkBoxElement = this.querySelector(".js-check");

            checkBoxElement.checked = true;
        })
    })

    function changeBookmarkButtonToSuccess() {
        bookmarkProjectButton.classList.add("welcome__action--bookmarked");
        bookmarkProjectImage.classList.add("welcome__bookmark--bookmarked");
    }

    function changeBookMarkButtonToNormal() {
        bookmarkProjectButton.classList.remove("welcome__action--bookmarked");
        bookmarkProjectImage.classList.remove("welcome__bookmark--bookmarked");
    }

    function showModal() {
        modal.classList.remove("modal--hidden");
        modalBackground.classList.remove("background--hidden");
    }

    function hideModal() {
        modal.classList.add("modal--hidden");
        modalBackground.classList.add("background--hidden");
    }

    function clearCheckboxElements() {
        console.log(checkBoxElements);
        checkBoxElements.forEach(checkBox => {
            console.log(123);
            checkBox.checked = false;
        })
    }
})();