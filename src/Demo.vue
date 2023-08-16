<template>
  <div style="display: flex; text-align: center;">
    <div>
      <ColorPicker
        :color="color"
        :onStartChange="(color) => onChange(color, 'start')"
        :onChange="(color) => onChange(color, 'change')"
        :onEndChange="(color) => onChange(color, 'end')"
      />
    </div>
    <div>
      <ColorPicker
        :is-gradient="true"
        :onStartChange="(color) => onChange(color, 'start')"
        :onChange="(color) => onChange(color, 'change')"
        :onEndChange="(color) => onChange(color, 'end')"
      />
    </div>
  </div>
</template>

<script>
import { ColorPicker } from "cb-vue-color-gradient-picker";
import 'cb-vue-color-gradient-picker/dist/style.css';

export default {
  name: 'App',
  components: {
    ColorPicker,
  },

  data() {
    return {
      color: {
        red: 255,
        green: 0,
        blue: 0,
        alpha: 1,
      },
    };
  },

  methods: {
    onChange(attrs, name) {
      this.color = { ...attrs };

      console.log(attrs, name);
    },
  },
};
</script>

<style lang="scss" ></style>
