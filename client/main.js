import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

const Thingies = new Meteor.Collection("Thingies");

Meteor.startup(function () {
  // if we omit subscription to firstSub, it works
  Meteor.subscribe('firstSub');
  Meteor.subscribe('secondSub');

  Tracker.autorun(function() {
    console.log("I have " + Thingies.find().count() + " thingies!");
  });
});