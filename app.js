if (Meteor.isClient) {

  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function() {
      return Session.get("counter");
    },
    greeting: function() {
      console.log("returning reeting text");
      return "Welcome to app.";
    },
    name: function() {
      return Session.get("name");
    }
  });

  Template.hello.events({
    "click button": function() {
      Session.set("counter", Session.get("counter") + 1);
    },
    "change #name": function() {
      console.log("changing the name");
      Session.set("name", $("#name").val());
    },
    "click input": function() {
      if (typeof console !== "undefined")
        console.log("You pressed the button");
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // ...
  });
}
