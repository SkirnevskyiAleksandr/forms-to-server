
// get all tag-form
const forms = document.querySelectorAll("form")

//iterate psevdo-masive forms
forms.forEach((item) => {
    formWrap(item)
})

function formWrap(form) {
    form.addEventListener('submit', (e) => {
        // get rid of default events
        e.preventDefault()
        const formData = new FormData(form) //create FormData object

        const request = new XMLHttpRequest() //create XMLHt...-object
        request.open('POST', "./js/server.php")
        // request.setRequestHeader("Content-type") - //not use with FormData+XMLHttpRequest
        request.send(formData)

        request.addEventListener('load', () => {
            console.log(request.response)
        })


    })
}