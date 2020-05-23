const { getValue } = require('../src/constants.js')

class Pet {
    constructor(name, species) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        this.species = species;
        this.children = [];

        this.isAlive = function() {
            if (this.fitness>MINIMUM_LEVEL && this.hunger<MAX_HUNGER && this.age<MAX_AGE){
                return true;
            } else {
                return false;}}
        ;
        

        // max and min values
        const MAX_FITNESS = getValue(species, "MAX_FITNESS");
        const MAX_AGE = getValue(species, "MAX_AGE");
        const MAX_HUNGER = getValue(species, "MAX_HUNGER");
        const MINIMUM_LEVEL = 0;

        // increments and decrements 
        const FITNESS_DECREMENT = getValue(species, "FITNESS_DECREMENT");
        const GROW_HUNGER_INCREMENT = getValue(species, "GROW_HUNGER_INCREMENT");
        const GROW_AGE_INCREMENT = getValue(species, "GROW_AGE_INCREMENT");
        const WALK_INCREMENT = getValue(species, "WALK_INCREMENT");
        const FEED_DECREMENT = getValue(species, "FEED_DECREMENT");

    // methods 
    this.growUp = function(){
        if (!this.isAlive()){throw new Error('Your pet is no longer alive :(')}
        else {
            this.age += GROW_AGE_INCREMENT;
            this.hunger += GROW_HUNGER_INCREMENT;
            if (this.fitness - FITNESS_DECREMENT > MINIMUM_LEVEL){
                this.fitness -= FITNESS_DECREMENT;
            }
           else {
                this.fitness= MINIMUM_LEVEL;}}
     },

     this.walk = function(){
        if (!this.isAlive()){throw new Error('Your pet is no longer alive :(')}
        else {
            if (this.fitness + WALK_INCREMENT < MAX_FITNESS){
                this.fitness += WALK_INCREMENT
            }
            else {
                this.fitness = MAX_FITNESS}}
    },
    
    this.feed = function(){
        if (!this.isAlive()){throw new Error('Your pet is no longer alive :(')}
        else {
            if (this.hunger - FEED_DECREMENT >MINIMUM_LEVEL){
            this.hunger-= FEED_DECREMENT
        }
        else {
            this.hunger = MINIMUM_LEVEL;
        }}
    },
    
    this.checkUp = function(){
        const walkStr= "I need a walk"
        const hungerStr="I am hungry"
        if (!this.isAlive()){throw new Error('Your pet is no longer alive :(')}
        else{
            if (this.fitness <= FITNESS_DECREMENT && this.hunger >= GROW_HUNGER_INCREMENT){
                return `${hungerStr} AND ${walkStr}`   }
            else if (this.fitness <= FITNESS_DECREMENT){
                return walkStr
             }
            else if (this.hunger >= GROW_HUNGER_INCREMENT){
                return hungerStr
                }
            else {
                return 'I feel great!'
            }}
        };
    
    this.adoptChild = function(children){
        if (!this.isAlive()){throw new Error('Your pet is no longer alive :(')}
        else {
            this.children.push(children)    }
        };    
    
    this.haveChild = function(childName){
        if (!this.isAlive()){throw new Error('Your pet is no longer alive :(')}
        else {
            this.children.push(new Pet(childName, this.species));
        }};
    }}
    



const pet = new Pet('dog','dog')
pet.growUp()
console.log(pet.isAlive())

module.exports = { Pet } 