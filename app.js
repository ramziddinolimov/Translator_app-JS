const selectElement = document.querySelectorAll("select")

selectElement.forEach(tag => {
    console.log(tag);
    for(const country_code in countries) {
        console.log(countries[country_code]);
        let option = `<option value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option)
    }
})