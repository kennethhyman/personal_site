import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
		{name: "Road Rant", frameworks: ["Ruby on Rails", "Ember.js"],
		languages: ["Ruby", "Javascript", "Java"], 
		description: "This is an application I worked on with a team at Volhacks 2016. The app itself allows users to report incidents of wreckless, dangerous, or just inattentive driving with the ease of just taking a picture of the license plate with their phone. I started off this hackathon by laying out the scaffolding of the rails backend, and then changed focus to the front end of the webapp"}, 
		{name: "Inventorying"},
		{name: "Cerebellium"}];
  },
});
