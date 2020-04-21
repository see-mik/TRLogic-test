export default {
  NOTES: state => state.notes,
  NOTE_BY_ID: state => id => state.notes.find(n => n.id === id),
  NOTES_LOADING: state => state.isNotesLoaded
};