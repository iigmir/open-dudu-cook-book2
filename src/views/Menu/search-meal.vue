<template>
    <div class="search-meal">
        <b-field>
            <b-input
                placeholder="查詢菜名..."
                type="search"
                icon-pack="fas"
                icon="search"
                v-model="text"
            />
        </b-field>
        <ul v-if="meals_matches_text.length < meals_list.length">
            <li v-for="(item, index) in meals_matches_text" v-bind:key="index">
                <a v-on:click="click_event('SearchMeal', item)" href="javascript:;">{{ item }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import emits from "./child-emits.js";
import { mapGetters } from "vuex";

export default {
    name: "SearchMeal",
    mixins: [ emits ],
    data: () => ({
        text: ""
    }),
    computed: {
        ...mapGetters( "Recipes", [ "default_list_getter" ] ),
        meals_list() {
            return this.default_list_getter.map( i => i.name );
        },
        meals_matches_text() {
            return this.meals_list.filter( item => item.match( this.text ) );
        },
    },
};
</script>
