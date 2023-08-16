import Hex from './Hex/index.vue';
import RGB from './RGB/index.vue';

export default {
    name: "Preview",

    props: {
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        updateColor: Function,
    },

    components: {
        Hex,
        RGB
    }
};
