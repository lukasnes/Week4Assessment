let names = []

const submitHandler = (evt) => {
    evt.preventDefault()
    let name = document.querySelector("#toDoList")

    let bodyObj = {
        name: name.value
    }
    console.log(bodyObj)
    axios.post("/api/toDoList/", bodyObj).then()
    name.value = ''
}

const submitHandler2 = (evt) => {
    evt.preventDefault()
    let checkedName = document.querySelector("#checkNames")
    let changedName = document.querySelector("#nameChange")

    let nameObj = {
        name: checkedName.value,
        updatedName: changedName.value
    }
    for(i = 0; i < names.length; i++){
        if(checkedName.value === names[i]){
            console.log(nameObj)
            axios.put('http://localhost:4000/api/updateName', nameObj)
            delete names[i]
        }
        else {
            alert("That name does not exist")
        }
    }
}

const submitHandler3 = (evt) => {
    evt.preventDefault()
    let nameToDel = document.querySelector('#deleteName')

    for(i = 0; i < names.length; i++){
        if(nameToDel.value === names[i]){
            deleteName(names[i])
        }
    }
}
document.querySelector('#form').addEventListener('submit', submitHandler)
document.querySelector('#form2').addEventListener('submit', submitHandler2)
document.querySelector('#form3').addEventListener('submit', submitHandler3)