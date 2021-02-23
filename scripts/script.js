(() => {
    const backProjectButton = document.querySelector(".js-back");
    const bookmarkProjectButton = document.querySelector(".js-bookmark");
    const bookmarkProjectImage = document.querySelector(".js-bookmark-img");

    const modal = document.querySelector(".js-modal");
    const closeModalButtonElement = document.querySelector(".js-modal-close")
    const modalBackground = document.querySelector(".js-modal-bg");
    const pledges = Array.from(document.querySelectorAll(".js-pledge"));

    const checkBoxElements = Array.from(document.querySelectorAll(".js-check"));
    const checkboxFooterElements = Array.from(document.querySelectorAll(".js-pledge-footer"));

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
        modalHiddenState = true;
        showModal();
    });

    closeModalButtonElement.addEventListener("click", (event) => {
        hideModal();

        modalHiddenState = true;
    })

    pledges.forEach((pledge) => {
        pledge.addEventListener("click", function (event) {

            clearCheckboxElements();
            clearCheckboxFooterElements();

            let checkBoxElement = this.querySelector(".js-check");

            checkBoxElement.checked = true;

            let checkBoxFooter = this.querySelector(".js-pledge-footer");

            checkBoxFooter.classList.remove("pledge__footer--hidden");
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
        checkBoxElements.forEach(checkBox => {
            checkBox.checked = false;
        })
    }

    function clearCheckboxFooterElements() {
        checkboxFooterElements.forEach((checkboxFooter) => {
            checkboxFooter.classList.add("pledge__footer--hidden");
        })
    }
})();