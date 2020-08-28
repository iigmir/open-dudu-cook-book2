<template>
    <div class="dish">
        Hello
        <p v-if="has_content">Dish</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Dish",
    computed: {
        ...mapGetters("Dish", [
            "dish_item",
            "has_content",
        ])
    }
};
</script>
