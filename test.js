p.__proto__ === Person.prototype;

Person.prototype.__proto__ = Object.prototype;

object.prototype.__proto__ = null;

