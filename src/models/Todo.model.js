export default function (todo) {
  this.id = Date.now();
  this.labelText = todo.labelText || '';
  this.complete = todo.complete || false;
};