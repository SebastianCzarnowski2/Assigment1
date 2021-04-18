
// download button, h1, li and input from index.html file
const button = document.querySelector("button")
const main = document.querySelector("h1")
const input = document.querySelector(".container input")
let li = document.querySelectorAll("ul li")
// creating empty array to store the data from fetch
let dataFetched = []
// creating variable to know name put in input
let name = "Sebastian";

// fetching data in the simple way

// const fetchingData = () => {
//     fetch(`https://api.nationalize.io/?name=${name}`)
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch(error => console.log(error))
// }


// fetching data using new Promise as (resolved and reject) 

const promise = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.nationalize.io/?name=${name}`).then(response => {
             return response.json()
        }).then(data => {
            resolve(data)
            dataFetched = data
        }).catch(error => {
            reject(error)
            alert(error)
         })
    })
}

// showing results

const showResults = () => {
    li[0].innerText = `To są trzy kraje z ktorych najprawdopodbniej jesteś:`
    li[1].innerText = `Prawdobieństwo, że jesteś z ${dataFetched.country[0].country_id} to ${dataFetched.country[0].probability}%`
    li[2].innerText = `Prawdobieństwo, że jesteś z ${dataFetched.country[1].country_id} to ${dataFetched.country[1].probability}%`
    li[3].innerText = `Prawdobieństwo, że jesteś z ${dataFetched.country[2].country_id} to ${dataFetched.country[2].probability}%`
    main.innerText = `Twoje imię to: ${dataFetched.name}`
}

// // trigger whole app by clicking button

button.addEventListener('click', async () => {
    name = input.value;
    await promise()
    showResults()
})


