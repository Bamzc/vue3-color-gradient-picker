<template>
        <Area
            :red="colorRed"
            :green="colorGreen"
            :blue="colorBlue"
            :alpha="colorAlpha"
            :hue="colorHue"
            :saturation="colorSaturation"
            :value="colorValue"
            :updateColor="updateColor"
            :is-gradient="false"
        />

        <Preview
            :red="colorRed"
            :green="colorGreen"
            :blue="colorBlue"
            :alpha="colorAlpha"
            :updateColor="updateColor"
        />
</template>

<script src="./script.js" />
