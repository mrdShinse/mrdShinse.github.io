//--------------------------------------
// Model
//--------------------------------------
var Task = Backbone.Model.extend({
    defaults: {
        title: '',
        closed: false
    },
    validate: function(attrs){
      if(_.isEmpty(attrs.title)){
        return 'no title.'
      }
    }
});

//--------------------------------------
// Collection
//--------------------------------------
var Tasks = Backbone.Collection.extend({
  model: Task,
  localStorage: new Store('task-app')
});

//--------------------------------------
// View
//--------------------------------------
var TaskView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click .toggle': 'toggleTask',
    'click .del': 'delTask'
  },
  initialize: function(){
    this.model.on('destroy', this.remove, this);
    this.model.on('change', this.remove, this);
  },
  template: _.template($('#temp-taskItem').html()),
  render: function(){
    var html = this.template(this.model.toJSON());
    this.$el.html(html)[
      this.model.get('closed') ? 'addClass' : 'removeClass'
    ]('closed');
    return this;
  },
  toggleTask: function(){
    this.model.set('closed', !this.model.get('closed')).save();
  },
  delTask: function(e){
    e.preventDefault();
    if(confirm('Can I delete this?')){
      this.model.destroy();
    }
  }
});

var TaskApp = Backbone.View.extend({
  events: {
    'submit .addTask': 'addTask',
    'click .clear': 'clearTask'
  },
  initialize: function(){
    var o = this;
    o.$title = o.$el.find('input.title');
    o.$list = o.$el.find('ul.taskList');
    o.$error = o.$el.find('.error');
    o.collection.on('add', function(task){
      var taskView = new TaskView({model: task});
      o.$list.prepend(taskView.render().el)
    })
    o.collection.fetch();
    o.collection.on("invalid", function(task, error){
      o.$error.text(error);
    });
  },
  addTask: function(e){
    var o = this;
    e.preventDefault();
    var sts = o.collection.create(
      {title: o.$title.val()},
      {validate: true}
    )
  },
  clearTask: function(){
    var o = this;
    if(confirm('Are you sure about delete all tasks?')){
      o.collection.each(function(task){
        o.collection.first().destroy();
      })
    }
  }
});
var taskApp = new TaskApp({
  el: $('div.taskApp'),
  collection: new Tasks()
})
