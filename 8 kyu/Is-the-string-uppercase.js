

String.prototype.isUpperCase = function() {
    return String(this) === this.toUpperCase()  ? true :  false
  }

  console.log("AAAAAAAAAAAAa".isUpperCase());