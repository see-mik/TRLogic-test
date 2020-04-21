export default function (note) {
  this.id = null;
  this.title = note.title || '';
  this.todos = note.todos || [];
  this.status = note.status || 'active';
  this.date = note.date || Date.now();
}