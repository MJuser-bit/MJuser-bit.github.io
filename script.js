document.addEventListener("DOMContentLoaded", function() {
    const rodoBtn = document.getElementById("rodo-btn");
    const rodoText = document.getElementById("rodo-text");

    let isRodoVisible = false;

    rodoBtn.addEventListener("click", function() {
        if (!isRodoVisible) {
            rodoText.className = "visible";
            rodoBtn.textContent = "Zakończ procedurę RODO";
            rodoBtn.style.borderColor = "#ef4444";
            rodoBtn.style.color = "#ef4444";
            isRodoVisible = true;
        } else {
            rodoText.className = "hidden";
            rodoBtn.textContent = "Uruchom procedurę RODO";
            rodoBtn.style.borderColor = "#22d3ee";
            rodoBtn.style.color = "#22d3ee";
            isRodoVisible = false;
        }
    });
});