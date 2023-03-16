let quest1 = false
let quest2 = true
let item2 = false
let item1 = false
let shopkeeper = document.getElementById("shopkeeper")
//let dialog = document.getElementById("text_page")

let back = document.body
let rightbtn = document.getElementById("rightbtn")
let leftbtn = document.getElementById("leftbtn")
let midbtn = document.getElementById("midbtn")
let backwardbtn = document.getElementById("backwardbtn")
let name = document.getElementById("name")
let item = document.getElementById("item")
let dialog = document.getElementById("text_page")
//stores all the inforamtion about all the locations and names of each location and button
const frame = [
  {//0
    view: "url('https://cdn.discordapp.com/attachments/678621053026828309/1073160741273731082/image.png')", leftbutton: "ENTER", rightbutton: "RIGHT", midbutton: "FORWARD", backbutton: "BACK",
    mapId: 3, rightmapId: 1, leftmapId: 0, backmapId: 0, location: "central"
  },
  {//1 
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1082948184604672090/pixel_door.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "ENTER", backbutton: "BACK", mapId: 2, rightmapId: 0, leftmapId: 7, backmapId: 0, location: "door"
  },
  {//2 
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1082948851452878868/pixel_office_.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "FORWARD", backbutton: "BACK", mapId: 1, rightmapId: 1, leftmapId: 1, backmapId: 1, location: "office"
  },
  {//3
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1082962367425548368/pixel_street.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "FORWARD", backbutton: "BACK", mapId: 4, rightmapId: 7, leftmapId: 8, backmapId: 0, location: "street"
  },
  {//4
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1083276941660008468/pixel_woods.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "CONTUNUE", backbutton: "BACK", mapId: 5, rightmapId: 3, leftmapId: 3, backmapId: 3, location: "woods"
  },
  {//5
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1083276024437014628/outside-pixelcabine.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "ENTER", backbutton: "BACK", mapId: 6, rightmapId: 3, leftmapId: 3, backmapId: 4, location: "woods"
  },
  {//6
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1082964562216751104/pixel_cabin.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "", backbutton: "BACK", mapId: 6, rightmapId: 3, leftmapId: 3, backmapId: 5, location: "cabin"
  },
  {//7
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1083281186979328070/pixel_turn.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "FORWARD", backbutton: "BACK", mapId: 1, rightmapId: 1, leftmapId: 3, backmapId: 1, location: "turn"
  },
  {//8
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1083280593439166484/pixel_road.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "FORWARD", backbutton: "BACK", mapId: 9, rightmapId: 10, leftmapId: 3, backmapId: 3, location: "road"
  },
  {//9
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1083284972879749120/pixel_deadend.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "FORWARD", backbutton: "BACK", mapId: 9, rightmapId: 1, leftmapId: 3, backmapId: 8, location: "deadend"
  },
  {//10
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1083283629318344774/pixel_forestroad.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "CONTUNUE", backbutton: "BACK", mapId: 11, rightmapId: 1, leftmapId: 3, backmapId: 8, location: "forest road"
  },
  {//11
    view: "url('https://cdn.discordapp.com/attachments/691020853248262184/1083284371299115058/pixel_harbour.png')", leftbutton: "LEFT", rightbutton: "RIGHT", midbutton: "FORWARD", backbutton: "BACK", mapId: 11, rightmapId: 1, leftmapId: 3, backmapId: 10, location: "the harbour"
  },
]

let nextId = 0
//exit the shop
function exit() {
  shopkeeper.src = ""
  dialog.innerText = ""
  rightbtn.classList.remove("hidden")
  midbtn.classList.remove("hidden")
  backwardbtn.classList.remove("hidden")
  mapAdd()
}
let end = 0
//if the player enters the shop it adds the shopkeeper and if u have an item the shopkeeper holds his hand to recive it 
function enter() {
  if (!quest1) {
    if (item1) {
      shopkeeper.src = iskrecive
    }
    else {
      shopkeeper.src = iskclose
    }
  } else if (!quest2) {
    if (item2) {
      shopkeeper.src = iskrecive
    }
    else {
      shopkeeper.src = iskclose
    }
  }
  else {
    shopkeeper.src = iskclose
  }
  dialog.innerText = "..."
  rightbtn.classList.add("hidden")
  midbtn.classList.add("hidden")
  backwardbtn.classList.add("hidden")
  leftbtn.innerText = ("EXIT")
  back.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/678621053026828309/1070609259504619550/medium_lemon.png')"
  name.innerText = ("Shopkeeper")
  nextId = 0
}

//the back button 
backwardbtn.addEventListener("click", function () {
  //next location for the back button
  nextId = (frame[nextId].backmapId)
  // removes items so they dont follow u out without picking em up
  item.src = ""
  //runs the next location and adds it to all the buttons
  mapAdd()
})

// items funcion
item.addEventListener("click", function () {
  // if the player collects an item it gets removed and adds item1 to true 
  if (item.src == "https://cdn.discordapp.com/attachments/691020853248262184/1082946793211449454/pixel_computer.png") {
    item.src = ""
    item1 = true
    //if the player collects an item it gets removed and adds item2 to true 
  } else if (item.src == "https://cdn.discordapp.com/attachments/691020853248262184/1083278564549468190/pixel_stone.png") {
    item.src = ""
    item2 = true
  }
})

leftbtn.addEventListener("click", function () {
  // if there is an exit, left button will run the exitfuntion
  if (leftbtn.innerText == "EXIT") {
    exit()
  } else if (leftbtn.innerText == "ENTER") {//if there is an enter, left button will run the enterfunction
    enter()
  } else {
    //next location for left button
    nextId = (frame[nextId].leftmapId)
    mapAdd()
  }
})

rightbtn.addEventListener("click", function () {
  //next location for right button
  nextId = (frame[nextId].rightmapId)
  mapAdd()
  //removes right button if its a door
});

//forward button or middle higher button
midbtn.addEventListener("click", function () {
  //next location for middle/forward button
  nextId = (frame[nextId].mapId)
  mapAdd()
})

//adds next location depending on what direction was pressed
function mapAdd() {
  name.innerText = (frame[nextId].location)
  back.style.backgroundImage = (frame[nextId].view)
  leftbtn.innerText = (frame[nextId].leftbutton)
  rightbtn.innerText = (frame[nextId].rightbutton)
  midbtn.innerText = (frame[nextId].midbutton)
  backwardbtn.innerText = (frame[nextId].backbutton)
  //------------------------------------------------------ 

  if (name.innerText == "cabin") {

    if (item2) { // removes the item so it doesent get back after entering the cabin again 
      item.src = ""
    }
    // adds an item if ur on that quest
    else if (!quest2) { item.src = "https://cdn.discordapp.com/attachments/691020853248262184/1083278564549468190/pixel_stone.png" }
    midbtn.classList.add("hidden")
  }
  //removes all buttons apart from the back button
  if (name.innerText == "office") {
    rightbtn.classList.add("hidden")
    leftbtn.classList.add("hidden")
    midbtn.classList.add("hidden")
    if (item1) { //removes the item so the player cant retrieve it twice
      item.src = ""
    }
    //adds the item if ur on the quest and its not fineshed 
    else if (!quest1) { item.src = "https://cdn.discordapp.com/attachments/691020853248262184/1082946793211449454/pixel_computer.png" } //change
  }
  //removes midbtn if its a deadend or right button and mid button if its an harbour
  if (name.innerText == "the harbour") {
    midbtn.classList.add("hidden")
  }
  if (name.innerText == "deadend") {
    midbtn.classList.add("hidden")
    rightbtn.classList.add("hidden")
  }
  //removes both side buttons if ur in the woods and adds mid button
  if (name.innerText == "woods") {
    rightbtn.classList.add("hidden")
    leftbtn.classList.add("hidden")
    midbtn.classList.remove("hidden")
    //and if ur in the canbin only the back button will show
  } else
    //removes mid and right button if its a turn
    if (name.innerText == "turn") {
      rightbtn.classList.add("hidden")
      midbtn.classList.add("hidden")

    }
  //removes both side buttons if ur in the forest 
  if (name.innerText == "forest road") {
    rightbtn.classList.add("hidden")
    leftbtn.classList.add("hidden")
    midbtn.classList.remove("hidden")
  }
  // if there is a road it will remove left button
  if (name.innerText == "road") {
    rightbtn.classList.remove("hidden")
    midbtn.classList.remove("hidden")
    leftbtn.classList.add("hidden")
  }
  // if the player is in the central it adds the right and left buttons 
  if (name.innerText == "central") {
    rightbtn.classList.remove("hidden")
    leftbtn.classList.remove("hidden")
  }
  // if ur on the streets it adds the right and left buttons 
  if (name.innerText == "street") {
    rightbtn.classList.remove("hidden")
    leftbtn.classList.remove("hidden")
    midbtn.classList.remove("hidden")
  }

  // else if the its a door it adds the middle button and left
  if (name.innerText == "door") {
    midbtn.classList.remove("hidden")
    leftbtn.classList.remove("hidden")
    rightbtn.classList.add("hidden")
  }
}


//all shopkeeper reactions
let iskclose = "https://cdn.discordapp.com/attachments/691020853248262184/1083334155938566265/isakclose.png"
let iskopen = "https://cdn.discordapp.com/attachments/691020853248262184/1083334156131512320/isaktranslusent2.png"
let iskrecive = "https://cdn.discordapp.com/attachments/691020853248262184/1083334156357992479/recive_isk.png"

//dialog
shopkeeper.addEventListener("click", function () {

  // if the shop keepers says a line the if gives him the next line
  // and if u have an item he will play new lines so he can thank you for returning his merchandise
  // if u complate a quest u will get a new one and it will reapet for ever

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
  if (dialog.innerText == ("thanks")) {
    end++
    if (end == 6) {
      item.src = "https://cdn.discordapp.com/attachments/691020853248262184/1085825791423696947/end.png"
      shopkeeper.src = ""
      back.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/691020853248262184/1085828019010150460/image_8.png')"
      dialog.innerText = "sToP iT!";
      setTimeout("location.reload(true);", 4000)
    }
  }
})
