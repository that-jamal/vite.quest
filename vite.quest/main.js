

let back = document.body
let rightbtn = document.getElementById("rightbtn")
let leftbtn = document.getElementById("leftbtn")
let midbtn = document.getElementById("midbtn")
let backwardbtn = document.getElementById("backwardbtn")
let name = document.getElementById("name")
let item = document.getElementById("item")
let shopkeeper = document.getElementById("shopkeeper")
let dialog = document.getElementById("text_page")

frame = [
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

//exit the shop
//nextId = (frame[nextId].leftmapId)

let nextId = 0

function exit() {
  shopkeeper.src = ""
  dialog.innerText = " "
  rightbtn.classList.remove("hidden")
  midbtn.classList.remove("hidden")
  backwardbtn.classList.remove("hidden")
  mapAdd()
}

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
    shopkeeper.src = isakclose
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

function backward() {
  nextId = (frame[nextId].backmapId)
  item.src = ""
  mapAdd()
  if (name.innerText == "forest road") {
    midbtn.classList.remove("hidden")
  } else if (name.innerText == "road") {
    rightbtn.classList.remove("hidden")
    midbtn.classList.remove("hidden")
  }

  if (name.innerText == "central") {
    rightbtn.classList.remove("hidden")
    leftbtn.classList.remove("hidden")
  }
  if (name.innerText == "street") {
    rightbtn.classList.remove("hidden")
    leftbtn.classList.remove("hidden")
  }
  if (name.innerText == "woods") {
    midbtn.classList.remove("hidden")
  }
  if (name.innerText == "door") {
    midbtn.classList.remove("hidden")
    leftbtn.classList.remove("hidden")
  }
}

function items() {
  if (item.src == "https://cdn.discordapp.com/attachments/691020853248262184/1082946793211449454/pixel_computer.png") {
    item.src = ""
    item1 = true
  } else if (item.src == "https://cdn.discordapp.com/attachments/691020853248262184/1083278564549468190/pixel_stone.png") {
    item.src = ""
    item2 = true
  }

}

leftbtn.addEventListener("click", function () {
  if (leftbtn.innerText == "EXIT") {
    exit()
  } else if (leftbtn.innerText == "ENTER") {
    enter()
    console.log("idk man")
  } else {
    nextId = (frame[nextId].leftmapId)
    mapAdd()
  }
  if (name.innerText == "street") {
    rightbtn.classList.remove("hidden")
    midbtn.classList.remove("hidden")
  }
  if (name.innerText == "turn") {
    rightbtn.classList.add("hidden")
    midbtn.classList.add("hidden")
  }
  if (name.innerText == "road") {
    leftbtn.classList.add("hidden")
  }
  item.src = ""
})

rightbtn.addEventListener("click", function () {

  nextId = (frame[nextId].rightmapId)
  mapAdd()
  if (name.innerText == "door") {
    rightbtn.classList.add("hidden")
  }
  if (name.innerText == "turn") {
    rightbtn.classList.add("hidden")
    midbtn.classList.add("hidden")

  }
  if (name.innerText == "forest road") {
    rightbtn.classList.add("hidden")
    leftbtn.classList.add("hidden")
  }
});

function mid() {
  nextId = (frame[nextId].mapId)
  item.src = ""
  mapAdd()
  if (name.innerText == "the harbour") {
    midbtn.classList.add("hidden")
  }
  if (name.innerText == "deadend") {
    midbtn.classList.add("hidden")
    rightbtn.classList.add("hidden")
  }



  if (name.innerText == "woods") {
    rightbtn.classList.add("hidden")
    leftbtn.classList.add("hidden")


  } else if (name.innerText == "cabin") {
    if (item2) {
      item.src = ""
    }
    else if (!quest2) { item.src = "https://cdn.discordapp.com/attachments/691020853248262184/1083278564549468190/pixel_stone.png" }
    midbtn.classList.add("hidden")
  }

  if (name.innerText == "office") {
    rightbtn.classList.add("hidden")
    leftbtn.classList.add("hidden")
    midbtn.classList.add("hidden")
    if (item1) {
      item.src = ""
    }
    else if (!quest1) { item.src = "https://cdn.discordapp.com/attachments/691020853248262184/1082946793211449454/pixel_computer.png" } //change
  }
}


function mapAdd() {
  name.innerText = (frame[nextId].location)
  back.style.backgroundImage = (frame[nextId].view)
  leftbtn.innerText = (frame[nextId].leftbutton)
  rightbtn.innerText = (frame[nextId].rightbutton)
  midbtn.innerText = (frame[nextId].midbutton)
  backwardbtn.innerText = (frame[nextId].backbutton)

}