<script setup>
import { useStore } from '@/stores/index.js'

const store = useStore()
</script>

<template>
    <h1>Home Page {{ store.count }}</h1>
</template>