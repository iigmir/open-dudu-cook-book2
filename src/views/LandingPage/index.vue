<template>
    <main class="container is-fluid">
        <Navigator />
        <div class="full columns">
            <div class="column" v-bind:class="{ hidden: !shown_flag_getter.show_Menu }">
                <Menu />
            </div>
            <div class="column" v-bind:class="{ hidden: !shown_flag_getter.show_RecipesList }">
                <RecipesList />
            </div>
            <div v-bind:class="dish_class_binding">
                <Dish />
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "../Menu/index.vue";
import Dish from "../Dish/index.vue";
import RecipesList from "../RecipesList/index.vue";
import Navigator from "../../components/Navigator.vue";

export default {
    name: "landing-page",
    components: {
        RecipesList,
        Navigator,
        Menu,
        Dish,
    },
    computed: {
        ...mapGetters( "RecipeFlag", ["shown_flag_getter"]),
        dish_class_binding() {
            const columns = Object.values( this.shown_flag_getter ).filter( c => c === true );
            return {
                column: true,
                "is-three-fifths": columns.length === 2,
                "is-three-quarters": columns.length === 1,
            };
        }
    },
    methods: {
        open (link) {
            this.$electron.shell.openExternal(link);
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Source Sans Pro', sans-serif;
    height: 100vh;
}

body > * {
    height: 98%;
}

main {
    height: 100%;
}
</style>

<style scoped>

main {
    display: flex;
    flex-direction: column;
}

main > .full.columns {
    flex: 1;
}

.full.columns .scroll.column {
    overflow-y: scroll;
}

.hidden.column {
    display: none;
}
</style>
