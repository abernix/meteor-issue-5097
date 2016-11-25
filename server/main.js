import { Meteor } from 'meteor/meteor';

const Thingies = new Meteor.Collection("Thingies");

Meteor.startup(function () {
  // if the tag field is omitted, it works
  if (Thingies.find().count() < 1) {
    console.log("Seeding database!");
    Thingies.insert({ tag: "lubricated" });
  }
});

// if either of the queries look for any tag string, it works
Meteor.publish('firstSub', function() {
  const results = Thingies.find({ tag: undefined });
  console.log("firstSub returned %d", results.count())
  return results;
});

Meteor.publish('secondSub', function() {
  const results = Thingies.find();
  console.log("secondSub returned %d", results.count())
  return results;
});
