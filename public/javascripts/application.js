function renderFormErrors (errorsJSON) {
    let errors = JSON.parse(errorsJSON);

    Object.keys(errors).forEach(field => {
        let input = document.getElementById(field);
        input.classList.add("is-invalid");
    });
}

window.onload = function() {
    document.querySelectorAll("[data-errors]").forEach(element => {
        if (element.dataset.errors.length > 0) {
            renderFormErrors(element.dataset.errors);
        }
    });
}