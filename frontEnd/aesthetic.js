const person = document.getElementById("person");
const bag = document.getElementById("bag");

person.addEventListener("mouseover", function () {
    person.name = "person"
    this.style.cursor = "pointer"
})

person.addEventListener("mouseout", function () {
    person.name = "person-outline"
    this.style.cursor = ""
})

bag.addEventListener("mouseover", function () {
    bag.name = "bag"
    this.style.cursor = "pointer"
})

bag.addEventListener("mouseout", function () {
    bag.name = "bag-outline"
    this.style.cursor = ""
})
