<template>
    <nav>
        <b-collapse class="card" animation="slide"
            v-for="(collapse, index) of collapses"
            v-bind:key="index"
            v-bind:open="isOpen == index"
            v-on:open="isOpen = index">
            <div class="card-header" slot="trigger" slot-scope="props" role="button">
                <p class="card-header-title">
                    {{ collapse.title }}
                </p>
                <a href="javascript:;" class="card-header-icon">
                    <b-icon v-bind:icon="props.open ? 'caret-up' : 'caret-down'"></b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                    <component v-bind:is="collapse.component" v-on:emit="emit_from_card" />
                </div>
            </div>
        </b-collapse>
    </nav>
</template>

<script>
import Group from "./group.vue";
import Feature from "./feature.vue";
import SearchMeal from "./search-meal.vue";
import SearchFood from "./search-food.vue";
import MealToday from "./today.vue";
import { mapActions } from "vuex";

export default {
    components: {
        Group,
        MealToday,
        SearchMeal,
        SearchFood,
        Feature,
    },
    data() {
        return {
            isOpen: -1,
            collapses: [
                {
                    title: "分組顯示",
                    component: "Group"
                },
                {
                    title: "今日餐桌",
                    component: "MealToday"
                },
                {
                    title: "查詢菜名",
                    component: "SearchMeal"
                },
                {
                    title: "查詢食材",
                    component: "SearchFood"
                },
                {
                    title: "主題菜譜",
                    component: "Feature"
                }
            ]
        };
    },
    methods: {
        ...mapActions("RecipeFlag", [
            "SET_sorted_type",
            "SET_sorted_tag",
        ]),
        ...mapActions("Dish", [
            "SET_item_by_feature",
        ]),
        emit_from_card(input = { component: "", data: "" }) {
            switch (input.component) {
            case "Group":
                this.group_action(input);
                break;
            case "SearchMeal":
                this.search_meal_action(input);
                break;
            case "Feature":
                this.feature_action(input);
                break;
            default:
                console.log(input);
                break;
            }
        },
        group_action(input = { component: "", data: "" }) {
            this.SET_sorted_type(input.component);
            this.SET_sorted_tag(input.data);
        },
        feature_action(input = { component: "", data: "" }) {
            this.SET_sorted_type(input.component);
            this.SET_sorted_tag(input.data);
            this.SET_item_by_feature(input.data);
        },
        search_meal_action(input = { component: "", data: "" }) {
            this.SET_sorted_type(input.component);
            this.SET_sorted_tag(input.data);
            this.SET_item_by_feature(input.data);
        },
        query_feat(item, prop) {
            const dictionary = {
                "SearchMeal": {
                    place_holder: "查詢菜名...",
                    query_label: "name"
                },
                "SearchFood": {
                    place_holder: "查詢食材...",
                    query_label: "source"
                }
            };
            return dictionary[item][prop] || "";
        },
    },
};
</script>

<style  scoped>
nav {
    max-height: 100%;
}
</style>
