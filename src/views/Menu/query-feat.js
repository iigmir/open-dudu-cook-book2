import { mapGetters } from "vuex";

export default {
    data: () => ({
        text: ""
    }),
    computed: {
        ...mapGetters( "Recipes", [ "default_list_getter" ] ),
        queries_list() {
            return this.default_list_getter;
        },
        matches_list() {
            const { queries_list, query_label, text } = this;
            return queries_list.filter( item => item[query_label].match( text ) ).map( i => i.name );
        },
    },
};
