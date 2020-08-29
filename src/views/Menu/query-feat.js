import { mapGetters } from "vuex";

export default {
    data: () => ({
        text: ""
    }),
    computed: {
        ...mapGetters( "Recipes", [ "default_list_getter" ] ),
        queries_list() {
            return this.default_list_getter.map( i => i[ this.query_label ] );
        },
        matches_list() {
            return this.queries_list.filter( item => item.match( this.text ) );
        },
    },
};
