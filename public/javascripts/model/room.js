class Room {
    Room(){
      var id = '';
    }

    url(){
        var url = 'http://localhost:3000/controller#' + this.id;
        return url;
    }

    spliteSharp(){
      var tmp = location.hash;
      var tmpArray = tmp.split("#");
      this.id = tmpArray[1];
      return this.id;
    }
}

module.exports = Room;
