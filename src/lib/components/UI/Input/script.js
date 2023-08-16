export default {
  name: 'Input',

  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    classes: {
      type: String,
      default: '',
    },
    onFocus: {
      type: Function,
      default: () => {},
    },
    onBlur: {
      type: Function,
      default: () => {},
    },
  },

  emits: ['update:modelValue'],

  methods: {
    onInput($event) {
      this.$emit('input', $event)
      this.$emit('update:modelValue', $event.target.value)
    },
  },

  // model: {
  //   prop: 'value',
  //   event: 'input',
  // },
};
