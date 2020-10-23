document.getElementById("form-input").addEventListener("input", function() {
    updateOutput(atob);
});

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
        if (!document.getElementById("btnCopy")) {

            let btn = document.createElement("BUTTON");
            let contentDiv = document.getElementById("content");
            contentDiv.appendChild(btn);

            btn.innerHTML = "Copy";
            btn.id = "btnCopy";
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