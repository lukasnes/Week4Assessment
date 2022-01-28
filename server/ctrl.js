let names = []

module.exports = {

doThis: (bodyObj) => {
            let  { name } = bodyObj
            names.push(name)
            let list = document.querySelector('.list')
            list.innerHTML = ''
            const nameText = document.createElement('p')
            nameText.textContent = name
            list.appendChild(nameText)
        },
changeName: (nameObj) => {
    console.log('hit')
    axios
        .put('http://localhost:4000/api/updateName/', nameObj)
        .then(response => {
            let updatedName = response.data
            names.push(updatedName)
            let list = document.querySelector('.list')
            list.innerHTML = ''
            const nameText = document.createElement('p')
            nameText.textContent = updatedName
            list.appendChild(nameText)
        })
},
deleteName: (name) => {
    console.log(name)
    let bodyObj = {
        name: name
    }

    axios
        .delete(`http://localhost:4000/api/deleteName/:${name}`)
        .then(response => {alert(response)})
}
}