function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function(){
    this.age += 1;
    this.hunger += 5;
    if (this.fitness >3){
        this.fitness -= 3;
    }
    else {
        this.fitness= 0;
    }
}

module.exports = Pet 