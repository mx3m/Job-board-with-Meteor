Meteor.publish('jobs', function() {
  return Jobs.find();
});

Meteor.methods({
  'submitJob': function(postAttributes) {
    check(postAttributes, {
      title: String,
      company: String,
      url: String,
      description: String,
      date: String
    });

    var post = _.extend(postAttributes, {
      created: new Date()
    });

    var postId = Jobs.insert(post);

    return {
      _id: postId
    }
  }
});
