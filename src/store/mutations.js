export default {
  ADD_NOTE(s, note) {
    s.notes = [note, ...s.notes];
    localStorage.setItem('notesList', JSON.stringify(s.notes));
  },

  UPDATE_NOTE(s, note) {
    const idx = s.notes.findIndex(n => n.id === note.id);
    s.notes[idx] = note;
    localStorage.setItem('notesList', JSON.stringify(s.notes));
  },

  REMOVE_NOTE(s, id) {
    s.notes = s.notes.filter(n => n.id !== id);
    localStorage.setItem('notesList', JSON.stringify(s.notes));
  }
};