class Room {
    Room() {
      var id = '';
      var url = 'http://192.168.1.13:3000/controller#' + this.id;
    }

    spliteSharp() {
      var tmp = location.hash;
      var tmpArray = tmp.split("#");
      this.id = tmpArray[1];
      return this.id;
    }

    createQrCode() {
      // $('#qrcode').qrcode(this.url);
    }

    url() {
      return 'http://192.168.1.13:3000/controller#' + this.id;
    }

    getId() {
      return this.id;
    }

    setId(id) {
      this.id = id;
    }

    getUrl() {
      return this.url;
    }
}

module.exports = Room;
