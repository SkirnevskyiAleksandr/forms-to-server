

// // get all tag-form
// const forms = document.querySelectorAll("form")

// //iterate psevdo-masive forms
// forms.forEach((item) => {
//     formWrap(item)
// })

// function formWrap(form) {
//     form.addEventListener('submit', (e) => {
//         // get rid of default events
//         e.preventDefault()
//         const formData = new FormData(form) //create FormData object

//         const request = new XMLHttpRequest() //create XMLHt...-object
//         request.open('POST', "./js/server.php")
//         // request.setRequestHeader("Content-type") - //not use with FormData+XMLHttpRequest
//         request.send(formData)

//         request.addEventListener('load', () => {
//             console.log(request.response)
//         })


//     })
// }


// //FETCH - Request(example)
// fetch("https://jsonplaceholder.typicode.com/posts",

//     {
//         method: "POST",
//         body: JSON.stringify({ name: 'Alex' }),
//         headers: { "Content-type": "application/json" }
//     }
// )
//     .then(response => response.json())
//     .then(json => console.log(json))



const forms = document.querySelectorAll("form")


function sendForms(form) {
    const formDate = new FormData(form)
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        fentch('./js/server.php',
            {
                method: "POST",
                body: formDate,
                headers: { "Content-type": application / json }
            })
            .then(response => response.json())
            .then(data => console.log(data))

    })
}
forms.forEach(item => sendForms(item))