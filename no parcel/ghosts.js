//  **************** GHOST CLASS ****************
// 1. check is character should move
// 2. get the next movement of the characters from their position, direction and if any object already exists there
// 3. make the ghosts move
// 4. check that they are scared
// 5. set the ghosts' new position
class Ghost {
    constructor(speed = 5, startPos, movement, name) {
      this.name = name;
      this.movement = movement;
      this.startPos = startPos;
      this.pos = startPos;
      this.dir = DIRECTIONS.ArrowRight;
      this.speed = speed;
      this.timer = 0;
      this.isScared = false;
      this.rotation = false;
    }
  
    shouldMove() {
      if (this.timer === this.speed) {
        this.timer = 0;
        return true;
      }
      this.timer++;
    }
  
    getNextMove(objectExist) {
      // Call move algoritm here
      const { nextMovePos, direction } = this.movement(
        this.pos,
        this.dir,
        objectExist
      );
      return { nextMovePos, direction };
    }
  

    // making ghost's moves
    makeMove() {
      const classesToRemove = [OBJECT_TYPE.GHOST, OBJECT_TYPE.SCARED, this.name];
      let classesToAdd = [OBJECT_TYPE.GHOST, this.name];
  
      if (this.isScared) classesToAdd = [...classesToAdd, OBJECT_TYPE.SCARED];
  
      return { classesToRemove, classesToAdd };
    }
  
    // setting ghost's new possition
    setNewPos(nextMovePos, direction) {
      this.pos = nextMovePos;
      this.dir = direction;
    }
  }








