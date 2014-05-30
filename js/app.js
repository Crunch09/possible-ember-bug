App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

App.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];

App.Router.map(function() {
  // put your routes here
  this.resource('todos', {path: '/'})
});

App.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

App.TodosController = Ember.ArrayController.extend({
  lengthOfTitle: null,
  cbmethod: function(){
    console.log('cbmethod was called!');
  }.observes('lengthOfTitle'),
  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });
      this.set('lengthOfTitle', title.length);

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  }
});
