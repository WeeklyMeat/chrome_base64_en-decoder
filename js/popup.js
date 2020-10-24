document.getElementById("form-input").addEventListener("input", function() {
    updateOutput(atob);
});
document.getElementById("btnSwitch").addEventListener("click", switchToEncode);

function switchToDecode() {

    document.getElementById("form-input").oninput = function() {
        updateOutput(atob);
    };

    document.getElementById("header-text").innerHTML = "base64 decode";
    document.getElementById("btnSwitch").removeEventListener("click", switchToDecode);
    document.getElementById("btnSwitch").onclick = switchToEncode;

    document.getElementById("form-input").value = document.getElementById("resultValue").innerHTML;
    updateOutput(atob);
}

function switchToEncode() {

    document.getElementById("form-input").oninput = function() {
        updateOutput(btoa);
    };

    document.getElementById("header-text").innerHTML = "base64 encode";
    document.getElementById("btnSwitch").removeEventListener("click", switchToEncode);
    document.getElementById("btnSwitch").onclick = switchToDecode;

    document.getElementById("form-input").value = document.getElementById("resultValue").innerHTML;
    updateOutput(btoa);
}

function updateOutput(transform) {

    let input = document.getElementById("form-input").value;
    let resultValue = transform(input);
    document.getElementById("resultValue").innerHTML = resultValue;
    updateBtnCopy();
}

function updateBtnCopy() {

    if(document.getElementById("form-input").value === "" && document.getElementById("btnCopy")) {
        document.getElementById("btnCopy").remove();
        document.getElementById("resultValue").innerHTML = "";
    }
    else {
        if (document.getElementById("form-input").value && !document.getElementById("btnCopy")) {

            let btn = document.createElement("BUTTON");
            let contentDiv = document.getElementById("content");
            contentDiv.appendChild(btn);

            btn.innerHTML = "Copy";
            btn.id = "btnCopy";
            btn.className = "btn"
            btn.addEventListener("click", copyHashValue);
        }
    }
}

function copyHashValue() {

    let hashValue = document.getElementById("resultValue").innerHTML;

    let tempInput = document.createElement("input");
    tempInput.value = hashValue;
    tempInput.style.height = 0;
    tempInput.style.margin = 0;
    tempInput.style.padding = 0;
    tempInput.style.border = 0;

    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    tempInput.remove();
}