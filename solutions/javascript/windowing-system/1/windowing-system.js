/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (width, height) {
  this.width = width;
  this.height = height;
};

function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  resize(size) {
    if (size.width < 1) {
      size.width = 1;
    }
    if (size.height < 1) {
      size.height = 1;
    }
    // x width y height
    if (size.width + this.position.x > this.screenSize.width) {
      size.width = this.screenSize.width - this.position.x;
    }
    if (size.height + this.position.y > this.screenSize.height) {
      size.height = this.screenSize.height - this.position.y;
    }
    this.size.width = size.width;
    this.size.height = size.height;
  }
  move(newPosition) {
    if (newPosition.x < 0) {
      newPosition.x = 0;
    }
    if (newPosition.y < 0) {
      newPosition.y = 0;
    }
    if (newPosition.x + this.size.width > this.screenSize.width) {
      newPosition.x = this.screenSize.width - this.size.width;
    }
    if (newPosition.y + this.size.height > this.screenSize.height) {
      newPosition.y = this.screenSize.height - this.size.height;
    }
    this.position = newPosition;
  }
}

function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
export { Size, Position, ProgramWindow, changeWindow };
