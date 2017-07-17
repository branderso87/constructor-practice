//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (hungry, color, status, owner) {
  this.hungry = hungry
  this.color = color
  this.status = status
  this.owner = owner
}
const sadie = new Dog()
const moonshine = new Dog()
const atticus = new Dog()
// Instances of Dog
// Needed: sadie, moonshine, atticus
sadie.status = 'normal'
sadie.color = 'black'
sadie.hungry = false

moonshine.hungry = true


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool
  this.pet = function (dog) {
    dog.status = 'happy'
    }
  this.feed = function (dog) {
    dog.hungry = false
  }
}

// Instances of Human
// Needed: mason, julia
const mason = new Human(false)
const julia = new Human(true)
