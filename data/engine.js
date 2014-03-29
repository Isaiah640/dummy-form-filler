function populateDummyData() {
    var $inputs = findInputs();
    var $textInputs = $inputs.filter(":text");
    var $emailInputs = $inputs.filter("[type='email']");

    populateTextInputs($textInputs);
    populateEmailInputs($emailInputs);
}

function populateTextInputs($inputs) {
    $inputs.each(function () {
        $(this).val(getDummyText());
    });
}

function populateEmailInputs($inputs) {
    var dummyEmail = getDummyEmail();
    $inputs.each(function () {
        $(this).val(dummyEmail);
    });
}

function getDummyText() {
    var startIndex = Math.floor(Math.random() * DEI_KOBOL.length - 5);

    if (startIndex < 0) {
        startIndex = 0;
    }

    var endIndex = startIndex + 5 + Math.floor(Math.random() * 10);
    var text = $.trim(DEI_KOBOL.substring(startIndex, endIndex));

    return text.charAt(0).toUpperCase() + text.slice(1);
}

function getDummyEmail() {
    var email = "";
    var size = 3 + Math.floor(Math.random() * 7);

    for (var i = 0; i < size; i++) {
        email += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
    }

    email += '@'
    for (var i = 0; i < 5; i++) {
        email += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
    }

    return email += '.com';
}

/*Returns inputs that are empty, visible and enabled. */
function findInputs() {
    var $allInputs = $('form').find('input');

    var $fitleredInputs = $allInputs.filter(function () {
        if (isEmpty($(this)) && isVisible($(this)) && isEnabled($(this))) {
            return true;
        } else {
            return false;
        }
    });

    return $fitleredInputs;
}

function isEmpty($input) {
    return !$.trim($input.val());
}

function isVisible($input) {
    return $input.is(":visible");
}

function isEnabled($input) {
    return $input.is(":enabled");
}
