function toggleText(id, button) {
    const text = document.getElementById(id);
    if (text.style.display === "inline") {
        text.style.display = "none";
        button.textContent = "Baca Selengkapnya";
    } else {
        text.style.display = "inline";
        button.textContent = "Baca Lebih Sedikit";
    }
}
