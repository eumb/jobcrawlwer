BlazeLayout.setRoot('body');



Template.JobList.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('jobs');
	});
});



Template.JobList.events({
	'click .toggleisApplied':function(){
		Meteor.call('toggleJobApplyedStatus',this._id,this.isApplyed)
	}


	
});

Template.JobList.helpers({
	
	jobs: () => {
		return Jobs.find({isApplyed:false});
	},

	categoryIs: function(){
		
		var categ = Jobs.findOne({_id:this._id},{fields:{'category':1}}); //returns only _id adn category of all objects
		//console.log(categ);
		if (categ.category === "bathroom")
			return "bathroom"
		if (categ.category === "builder")
			return "builder"
		else if (categ.category === "bricklayer")
			return "bricklayer"
	}

});



/*Template.JobList.helpers({
	textValue: function() {
		return 
    if (this.en) {
      return this.text.tc;
    } else if (this.tc) {
      return this.text.tc;
    }
  }
});*/
