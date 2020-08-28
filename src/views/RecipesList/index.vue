<template>
    <b-menu>
        <b-menu-list>
            <b-menu-item
                v-for="(first_item, first_index) in final_list" v-bind:key="first_index"
                icon="book" v-bind:active="first_index === isActive">
                <template slot="label" slot-scope="props">
                    {{ first_item.name }}
                    <b-icon v-bind:icon="props.expanded ? 'caret-down' : 'caret-up'"></b-icon>
                </template>
                <b-menu-item
                    v-for="(second_item, second_index) in first_item.child"
                    v-bind:key="second_index"
                    v-bind:label="second_item.name"
                    v-on:click="choose_dish(second_item)"
                    icon="map-marker"
                />
            </b-menu-item>
        </b-menu-list>
    </b-menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import group_modules from "./group-module.js";

export default {
    name: "RecipesList",
    mixins: [
        group_modules
    ],
    data() {
        return {
            isActive: -1,
        };
    },
    computed: {
        ...mapGetters( "RecipeFlag", [
            "sorted_type_getter",
        ]),
        example_list() {
            return [
                { name: "X", child: ["4,1","1,1","1"] },
                { name: "Y", child: ["4,1,1","1,1,2"] }
            ];
        },
        by_group_list() {
            if( this.sorted_type_getter === "Group" ) {
                return this.group_labels_from_module;
            }
            return [];
        },
        final_list() {
            switch (this.sorted_type_getter) {
            case "Group":
                // console.log(this.group_final_list);
                return this.group_final_list;
            default:
                return [];
            }
            
        }
    },
    methods: {
        ...mapActions( "Dish", {
            SET_dish_item: "SET_item"
        }),
        choose_dish(item = {}) {
            this.SET_dish_item();
            this.SET_dish_item(item);
        }
    }
};
</script>