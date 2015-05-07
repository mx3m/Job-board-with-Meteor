Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var time = date.getTime();

    var post = {
      title: $(e.target).find('[name=title]').val(),
      company: $(e.target).find('[name=company]').val(),
      url: $(e.target).find('[name=url]').val(),
      description: $(e.target).find('[name=description]').val(),
      date: month + "/" + day + "/" + year
    }

    Meteor.call('submitJob', post, function(error, result) {
      if (error) {
        alert(error.reason);
      }

      Router.go('postSingle', {_id: result._id});
    });
  }
});
