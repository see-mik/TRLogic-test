export default {
  props: {
    text: String,
    modeEdit: Boolean
  },
  data: () => ({
    rawText: null,
    editOn: null
  }),
  beforeMount() {
    this.rawText = this.text || '';
    this.editOn = this.text.length > 0;
  },
  computed: {
    edit() {
      return this.editOn;
    },
  },
  methods: {
    addTitle() {
      if (!this.editOn && this.text !== this.rawText) {
        this.$emit('add-text', this.rawText);
      }
      this.editOn = !this.editOn;
    }
  }
}