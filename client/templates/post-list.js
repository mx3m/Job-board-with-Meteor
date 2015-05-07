Template.postsList.helpers({
  'posts': function() {
    return Jobs.find({}, {sort: {created: -1}});
  }
});
