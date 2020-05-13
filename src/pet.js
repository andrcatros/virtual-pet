const MAXIMUM_FITNESS = 10 ;
const MINIMUM_LEVEL = 0 ;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;;
}

Pet.prototype.growUp = function(){
    this.age += 1;
    this.hunger += 5;
    if (this.fitness-3 > MINIMUM_LEVEL){
        this.fitness -= 3;
    }
    else {
        this.fitness= MINIMUM_LEVEL;
    }
}

Pet.prototype.walk = function(){
    if (this.fitness+4 < MAXIMUM_FITNESS){
        this.fitness+=4
    }
    else {
        this.fitness = MAXIMUM_FITNESS
    }
}

module.exports = Pet 