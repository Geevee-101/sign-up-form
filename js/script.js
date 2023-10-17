let inputPassword = document.getElementById('user_password')
let inputPasswordConfirm = document.getElementById('user_password_confirm')
let warningText = document.getElementById('warning_id')

function error_check() {
    // Validate match
    if (inputPassword.value.length > 0 & inputPasswordConfirm.value.length > 0) {
        if (inputPassword.value != inputPasswordConfirm.value) {
            inputPassword.classList.add("error");
            inputPasswordConfirm.classList.add("error");
            warningText.innerHTML = "* Passwords do not match";
        } else {
            inputPassword.classList.remove("error");
            inputPasswordConfirm.classList.remove("error");
            warningText.innerHTML = "";
        }
    }
}

inputPasswordConfirm.onkeyup = error_check;
inputPassword.onkeyup = error_check;