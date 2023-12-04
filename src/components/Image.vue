<script setup>
import { ref } from "vue";
const props = defineProps(["src"]);
const src = props.src;
const isLoaded = ref(false);
function loaded() {
    isLoaded.value = true;
}
</script>

<template>
    <span v-if="!isLoaded" class="div"></span>
    <img @load="loaded()" :class="{ active: isLoaded }" v-bind:src="src" />
</template>

<style>
.div {
    width: 120px;
    height: 120px;
    display: inline-block;
    background-color: rgb(146, 146, 146);
    position: relative;
    overflow: hidden;
    padding: 0!important;
    box-sizing: border-box!important;
    margin: 0!important;
    margin-bottom: -10px;

}
.div::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 80px;
    background: linear-gradient(to right, transparent, #d1d1d1, transparent);
    animation: anim 1s infinite;
    top: 0;
    left: 0;
}
@keyframes anim {
    from {
        left: -80px;
    }
    to {
        left: 100%;
    }
}
img {
    visibility: hidden;
}
img.active {
    visibility: visible;
    margin-bottom: 6px;
}
</style>
