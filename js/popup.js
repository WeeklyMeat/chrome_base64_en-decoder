document.execCommand("Paste");

document.getElementById("hashInput").addEventListener("input", updateSHA);

function updateSHA() {

    let hashInput = document.getElementById("hashInput").value;
    let hashValue = atob(hashInput);
    document.getElementById("hashValue").innerHTML = hashValue;

    let isEmpty = document.getElementById("hashInput").value === "";

    if(isEmpty && document.getElementById("buttonCopy")) {
        document.getElementById("buttonCopy").remove();
        document.getElementById("hashValue").innerHTML = "";
    }
    else {
        if (!document.getElementById("buttonCopy")) {

            let btn = document.createElement("BUTTON");
            let contentDiv = document.getElementById("content");
            contentDiv.appendChild(btn);

            btn.innerHTML = "Copy";
            btn.id = "buttonCopy";
            btn.addEventListener("click", copyHashValue);
        }
    }
}

function copyHashValue() {

    let hashValue = document.getElementById("hashValue").innerHTML;

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