<template>
  <sample-requirements :title="title" :value-html="valueHtml"></sample-requirements>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import SampleRequirements from './SampleRequirements.vue';
const title = ref("动物送样需求");
const valueHtml = ref("<p>动物送样需求</p>");
</script>