const selectElement = document.querySelectorAll("select")

selectElement.forEach(tag => {
    console.log(tag);
    for(const country_code in countries) {
        console.log(countries[country_code]);
    }
})