/* The Mediator Pattern provides central authority over a group of objects
by encapsulating how these objects interact. This model is useful for
scenarios where there is a need to manage complex conditions in which 
every object is aware of any state change in any other object in the group. */

function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  send: function(message, toMember) {
    this.chatroom.send(message, this, toMember)
  },
  receive: function(message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`)
  }
}

function Chatroom() {
  this.members = {}
}

Chatroom.prototype = {
  addMember: function(member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },
  send: function(message, fromMember, toMember) {
    toMember.receive(message, fromMember)
  }
}

const chat = new Chatroom();

const kinga = new Member('Kinga');
const lisa = new Member('Lisa');

chat.addMember(kinga);
chat.addMember(lisa);

kinga.send("Hey Lisa!", lisa);
lisa.send("Hey Kinga!", kinga);