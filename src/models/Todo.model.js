export default function (todo) {
  this.id = todo.id || '';
  this.labelText = todo.labelText || '';
  this.complete = todo.complete || false;
};