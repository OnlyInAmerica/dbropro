// Model
Posts = new Meteor.Collection("posts");

if (Meteor.isClient) {
  Template.hello.posts = function() {
      return Posts.find();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // nothing needed on server startup yet
  });
}

