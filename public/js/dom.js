
function copyText() {
    let copyArea = document.getElementById("generator-area");
    let inputGroup = document.getElementsByClassName("copy-alert")[0];
    copyArea.select();
    copyArea.setSelectionRange(0, 99999)
    document.execCommand("copy");
    inputGroup.innerHTML += `<h6>Copied</h6>`
    setTimeout(() => {
        inputGroup.innerHTML = ``
    }, 2000);
}


