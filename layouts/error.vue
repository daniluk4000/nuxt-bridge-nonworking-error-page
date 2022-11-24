<template>
    <h1>
        Error!
    </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CommonError',
    props: {
        error: {
            type: Object,
        },
    },
});

</script>