Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('jobs')
  }
});

Router.route('/', {name: 'postsList'});
Router.route('/submit', {name: 'postSubmit'});
Router.route('/posts/:_id', {
  name: 'postSingle',
  data: function() {
    return Jobs.findOne(this.params._id);
  }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()){
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postSingle'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
