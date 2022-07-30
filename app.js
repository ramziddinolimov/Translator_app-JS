const selectElement = document.querySelectorAll("select")
const fromTextElement = document.querySelector(".from-text")
const translateBtnElement = document.querySelector("button")

selectElement.forEach((tag, id) => {
    // console.log(tag);
    for(const country_code in countries) {
        let selected;
        if(id == 0 && country_code == "en-GB") {
            selected = "selected"
        } else if (id == 1 && country_code == "hi-IN"){
            selected = "selected"
        }
        // console.log(countries[country_code]);
        let option = `<option value="${country_code}"${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option)
    }
})


translateBtnElement.addEventListener("click", () => {
    let text = fromTextElement.value;
    console.log(text);
})