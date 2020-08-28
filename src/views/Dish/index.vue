<template>
    <article class="dish" v-if="has_content">
        <h1 v-on:click="hide_detail = !hide_detail" class="pointer title">{{ dish_item.name }}</h1>
        <section class="detail" v-bind:class="{ 'hidden': hide_detail }">
            <ul>
                <li v-for="(item) in detail_contents" v-bind:key="item.name">
                    <span>{{ item.name }}</span>
                    <span>{{ item.value }}</span>
                </li>
            </ul>
        </section>
        <section class="source">
            <h2 class="subtitle">{{ dish_label.source }}</h2>
            <div>{{ dish_item.source }}</div>
        </section>
        <section class="cooking">
            <h2 class="subtitle">{{ dish_label.cooking }}</h2>
            <div>{{ dish_item.cooking }}</div>
        </section>
    </article>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Dish",
    data() {
        return {
            hide_detail: false
        };
    },
    computed: {
        ...mapGetters("Dish", [
            "dish_item",
            "has_content",
        ]),
        dish_label() {
            return {
                name: "菜名：",
                time: "烹調時間：",
                ctype: "烹調類別：",
                stype: "食材類別：",
                taste: "味道：",
                season: "適宜季節：",
                style: "菜系：",
                source: "材料",
                cooking: "做法：",
            };
        },
        detail_contents() {
            const { dish_label, dish_item } = this;
            const condition = label => ["source", "cooking", "name"].some( fobidden => label === fobidden ) === false;
            const generated_result = name => ({ name: dish_label[ name ], value: dish_item[ name ], });
            return Object.keys( dish_label ).filter( label => condition( label ) ).map( name => generated_result( name ) );
        },
    }
};
</script>

<style scoped>
.pointer {
    cursor: pointer;
}

.hidden {
    display: none;
}
</style>
