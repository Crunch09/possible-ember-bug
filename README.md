== Reproducing the bug

* Open `index.html` in your (chrome) browser
* Add a new `Todo` item - `cbmethod` is not being triggered
* Open Chrome Devtools, go to the `Ember` tab and click on `App.TodosController`
* Add a new `Todo` item again - `cbmethod` is now being called
