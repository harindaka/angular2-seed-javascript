(function(app) {	
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      directives: [app.BooksComponent],
      template: `
      	<h1>My First Angular 2 App</h1>
      	<books>Loading Books...</books>
      	`
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));