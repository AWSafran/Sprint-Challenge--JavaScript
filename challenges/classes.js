// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height){
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }

//   CuboidMaker.prototype.volume = function(){
//     return this.length * this.width * this.height;
//   }

//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//   }  

class CuboidMakerRefactored{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height
    }

    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

  let cuboidRefactored = new CuboidMakerRefactored(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboidRefactored.volume()); // 100
 console.log(cuboidRefactored.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cube extends CuboidMakerRefactored{
    constructor(dimension){
        super(dimension, dimension, dimension)
    }
    volume(){
        return Math.pow(this.length, 3);
    }
    surfaceArea(){
        return 6 * Math.pow(this.length, 2);
    }
}

let cube = new Cube(2);
console.log(cube.volume());
console.log(cube.surfaceArea());

let cubeFour = new Cube (4);
console.log(cubeFour.volume());
console.log(cubeFour.surfaceArea());

class CubeOrCuboid{
    constructor(length, width = length, height = length){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

let isCube = new CubeOrCuboid(3);

console.log(isCube.volume());
console.log(isCube.surfaceArea());

let isCuboid = new CubeOrCuboid(1, 2, 3);

console.log(isCuboid.volume());
console.log(isCuboid.surfaceArea());