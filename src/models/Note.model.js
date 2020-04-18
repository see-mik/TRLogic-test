export default function (note) {
  this.id = note.id || '';
  this.title = note.title || '';
  this.todos = note.todos || [];
  this.status = note.status || 'active';
  this.date = note.date || new Date();
}