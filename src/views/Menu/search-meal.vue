<template>
    <div class="search-meal">
        <b-field>
            <b-input placeholder="查詢菜名..." type="search" icon="search" v-model="text" />
        </b-field>
        <ul v-if="matches_list.length < queries_list.length">
            <li v-for="(item, index) in matches_list" v-bind:key="index">
                <a v-on:click="click_event('SearchMeal', item)" href="javascript:;">{{ item }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import emits from "./child-emits.js";
import query from "./query-feat.js";

export default {
    name: "SearchMeal",
    mixins: [ emits, query ],
    data: () => ({
        query_label: "name",
    }),
};
</script>
