import Picker from "./Picker/index.vue";
import Preview from "./Preview/index.vue";
import Hue from "./Hue/index.vue";
import Alpha from "./Alpha/index.vue";
import GradientPoints from "./GradientPoints/index.vue";

export default {
    name: "Area",

    props: {
        isGradient: Boolean,
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        hue: Number,
        saturation: Number,
        value: Number,
        updateColor: Function,
        points: Array,
        degree: Number,
        type: String,
        activePointIndex: Number,
        changeGradientControl: Function,
        changeActivePointIndex: Function,
        updateGradientLeft: Function,
        addPoint: Function,
        removePoint: Function,
    },

    components: {
        Picker,
        GradientPoints,
        Preview,
        Hue,
        Alpha
    },
}
