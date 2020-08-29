<template>
    <div>
        <b-field>
            <b-input v-bind="input_bind" />
        </b-field>
        <ul v-if="matches_list.length < queries_list.length">
            <li v-for="(item, index) in matches_list" v-bind:key="index">
                <a v-on:click="click_event( component_type, item)" href="javascript:;">{{ item }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import emits from "./child-emits.js";
import { mapGetters } from "vuex";

export default {
    name: "Query",
    mixins: [ emits ],
    props: {
        component_type: {
            type: String,
            default: () => "Query",
        },
        place_holder: {
            type: String,
            default: () => "Query...",
        },
        query_label: {
            type: String,
            default: () => "name",
        }
    },
    data: () => ({
        text: ""
    }),
    computed: {
        ...mapGetters( "Recipes", [ "default_list_getter" ] ),
        input_bind() {
            return {
                placeholder: this.place_holder,
                type: "search",
                icon: "search",
            };
        },
        queries_list() {
            return this.default_list_getter.map( i => i[ this.query_label ] );
        },
        matches_list() {
            return this.queries_list.filter( item => item.match( this.text ) );
        },
    },
};
</script>
