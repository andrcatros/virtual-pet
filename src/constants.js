
const getValue = (species, variable) => {
    if (species === "dog"){
        switch(variable){
            case "MAX_FITNESS":
                return 20;
            case "MINIMUM_LEVEL":
                return 0;
            case "MAX_AGE":
                return 30;
            case "MAX_HUNGER":
                return 10;
            case "FITNESS_DECREMENT":
                return 3;
            case "GROW_HUNGER_INCREMENT":
                return 5;
            case "GROW_AGE_INCREMENT":
                return 1;
            case "WALK_INCREMENT":
                return 4;
            case "FEED_DECREMENT":
                return 3;}
        } else if (species === "cat") {
            switch(variable){
                case "MAX_FITNESS":
                    return 5;
                case "MINIMUM_LEVEL":
                    return 0;
                case "MAX_AGE":
                    return 20;
                case "MAX_HUNGER":
                    return 100;
                case "FITNESS_DECREMENT":
                    return 3;
                case "GROW_HUNGER_INCREMENT":
                    return 10;
                case "GROW_AGE_INCREMENT":
                    return 1;
                case "WALK_INCREMENT":
                    return 4;
                case "FEED_DECREMENT":
                    return 3;}
        } else if (species === "turtle"){
            switch(variable){
                case "MAX_FITNESS":
                    return 2;
                case "MINIMUM_LEVEL":
                    return 0;
                case "MAX_AGE":
                    return 130;
                case "MAX_HUNGER":
                    return 10;
                case "FITNESS_DECREMENT":
                    return 0.25;
                case "GROW_HUNGER_INCREMENT":
                    return 5;
                case "GROW_AGE_INCREMENT":
                    return 7;
                case "WALK_INCREMENT":
                    return 4;
                case "FEED_DECREMENT":
                    return 3;}
        } else if (species === "dragon"){
            switch(variable){
                case "MAX_FITNESS":
                    return 200;
                case "MINIMUM_LEVEL":
                    return 0;
                case "MAX_AGE":
                    return 2000;
                case "MAX_HUNGER":
                    return 1000;
                case "FITNESS_DECREMENT":
                    return 10;
                case "GROW_HUNGER_INCREMENT":
                    return 50;
                case "GROW_AGE_INCREMENT":
                    return 7;
                case "WALK_INCREMENT":
                    return 10;
                case "FEED_DECREMENT":
                    return 25;}
                }
        };


module.exports = { getValue }