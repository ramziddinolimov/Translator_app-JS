const selectElement = document.querySelectorAll("select")
const fromTextElement = document.querySelector(".from-text")
const translateBtnElement = document.querySelector("button")
const toTextElement = document.querySelector(".to-text")

selectElement.forEach((tag, id) => {
    // console.log(tag);
    for(const country_code in countries) {
        let selected;
        if(id == 0 && country_code == "US") {
            selected = "selected"
        } else if (id == 1 && country_code == "UZ"){
            selected = "selected"
        }
        // console.log(countries[country_code]);
        let option = `<option value="${country_code}"${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option)
    }
})


translateBtnElement.addEventListener("click", () => {
    let text = fromTextElement.value;
    let transletfrom = selectElement[0].value
    let transleto = selectElement[1].value
    // console.log(text, transletFrom, transletTo);
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=US|UZ`;
    console.log(apiUrl);
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
        toTextElement.value = data.responseData.translatedText
    })
})