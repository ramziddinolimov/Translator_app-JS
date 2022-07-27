const selectElement = document.querySelectorAll("select")

selectElement.forEach(event => {
    for(const code in countries) {
        console.log(code);
    }
})