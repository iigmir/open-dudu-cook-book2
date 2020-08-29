import { mapGetters } from "vuex";

export default {
    data: () => ({
        text: ""
    }),
    computed: {
        ...mapGetters( "Recipes", [ "default_list_getter" ] ),
        matches_list() {
            const { default_list_getter, query_label, text } = this;
            return default_list_getter.filter( item => item[query_label].match( text ) ).map( i => i.name );
        },
    },
};
