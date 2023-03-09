let quest1 = false
let quest2 = true
let item2 = false
let item1 = false
let shopkeeper = document.getElementById("shopkeeper")
let dialog = document.getElementById("text_page")

//dialog


let iskclose = "https://cdn.discordapp.com/attachments/691020853248262184/1083334155938566265/isakclose.png"
let iskopen = "https://cdn.discordapp.com/attachments/691020853248262184/1083334156131512320/isaktranslusent2.png"
let iskrecive = "https://cdn.discordapp.com/attachments/691020853248262184/1083334156357992479/recive_isk.png"

function shop() {

    if (quest2) {
        console.log(quest2)
    }

    if (dialog.innerText == ("i have a quest for you")) {
        shopkeeper.src = iskopen
        dialog.innerText = "find my computer"
    } else if (dialog.innerText == ("find my computer")) {
        dialog.innerText = "..."
        shopkeeper.src = iskclose
    } else if (dialog.innerText == ("hello im the shopkeeper")) {
        shopkeeper.src = iskclose
        dialog.innerText = "i have a quest for you"
    } else if (!quest1) {
        shopkeeper.src = iskopen
        dialog.innerText = "hello im the shopkeeper"
    }
    // return item
    if (dialog.innerText == ("thanks")) {
        quest2 = false
        item1 = false
        dialog.innerText = "..."
    }
    else if (dialog.innerText == ("you found my computer")) {
        dialog.innerText = "thanks"
        shopkeeper.src = iskclose
    }
    else if (item1) {
        dialog.innerText = "you found my computer"
        quest1 = true

    } else if (dialog.innerText == ("you found my rock")) {
        dialog.innerText = "thanks"
        quest1 = false
        item2 = false
        item1 = false
        shopkeeper.src = iskopen
    } else if (item2) {
        dialog.innerText = "you found my rock"
        quest2 = true
        shopkeeper.src = iskclose
    }

    if (dialog.innerText == ("help me find my rock now")) {
        shopkeeper.src = iskopen
        dialog.innerText = "its somewhere in the woods"
    } else if (dialog.innerText == ("its somewhere in the woods")) {
        dialog.innerText = "..."
        shopkeeper.src = iskclose
    } else if (!quest2) {
        shopkeeper.src = iskopen
        dialog.innerText = "help me find my rock now"
    }


}


