const MAXIMUM_FITNESS = 10 ;
const MINIMUM_LEVEL = 0 ;
const MAX_AGE = 30;
const MAX_HUNGER = 10;

const FITNESS_DECREMENT = 3 
const GROW_HUNGER_INCREMENT = 5 ;
const GROW_AGE_INCREMENT = 1 ;

const WALK_INCREMENT = 4 ;
const FEED_DECREMENT = 3;


class Pet {
    // constructor
    constructor(name){
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10; 
        this.children = [];
    }

    // getter
    get isAlive() {
        if (this.fitness>MINIMUM_LEVEL && this.hunger<MAX_HUNGER && this.age<MAX_AGE){
            return true;
        }
        else {
            return false;}}

    // methods 
    growUp = function(){
        if (!this.isAlive){throw new Error('Your pet is no longer alive :(')}
        else {
            this.age += GROW_AGE_INCREMENT;
            this.hunger += GROW_HUNGER_INCREMENT;
            if (this.fitness- FITNESS_DECREMENT > MINIMUM_LEVEL){
                this.fitness -= FITNESS_DECREMENT;
            }
           else {
                this.fitness= MINIMUM_LEVEL;}}
     };
    
    walk = function(){
        if (!this.isAlive){throw new Error('Your pet is no longer alive :(')}
        else {
            if (this.fitness+ WALK_INCREMENT < MAXIMUM_FITNESS){
                this.fitness += WALK_INCREMENT
            }
            else {
                this.fitness = MAXIMUM_FITNESS
        }}
    };
    
    feed = function(){
        if (!this.isAlive){throw new Error('Your pet is no longer alive :(')}
        else {
            if (this.hunger - FEED_DECREMENT >MINIMUM_LEVEL){
            this.hunger-= FEED_DECREMENT
        }
        else {
            this.hunger = MINIMUM_LEVEL;
        }}
    };
    
    checkUp = function(){
        const walkStr= "I need a walk"
        const hungerStr="I am hungry"
        if (!this.isAlive){throw new Error('Your pet is no longer alive :(')}
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

    // baby methods

    adoptChild = function(children){
        if (!this.isAlive){throw new Error('Your pet is no longer alive :(')}
        else {
            this.children.push(children)
        }
    }    

    haveChild = function(childName){
        if (!this.isAlive){throw new Error('Your pet is no longer alive :(')}
        else {
            this.children.push(new Pet(childName));
            this.children.push(new Pet('Billy'));
        }
    }
}
    

module.exports = Pet 

const parent = new Pet('Dave');

parent.haveChild('Amelia');
console.log(parent.children)