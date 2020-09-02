<template>
    <nav class="columns">
        <form hidden>
            <input ref="file_dom" type="file" name="file-dom" id="file-dom" accept=".xml" />
        </form>
        <div class="column">
            <a
                href="javascript:;"
                v-for="fc_item in first_column"
                v-bind:key="fc_item.label"
                v-on:click="link_action(fc_item.act)"
            >
                <b-icon v-bind:icon="fc_item.icon" size="is-large" />
                <span class="link-label">{{ fc_item.label }}</span>
            </a>
        </div>
        <!-- <div class="column">
            <b-dropdown aria-role="list">
                <a href="javascript:;" slot="trigger">
                    <b-icon icon="hat-cowboy-side" size="is-large" />
                    <span class="link-label">顯示風格</span>
                </a>
                <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
            </b-dropdown>
        </div> -->
    </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "Navigator",
    data: () => ({
        first_column: [
            { icon: "bars", label: "工具欄", act: "SET_toggle_show_Menu" },
            { icon: "address-book", label: "菜譜索引", act: "SET_toggle_show_RecipesList" },
            // { icon: "file-code", label: "載入菜譜", act: "load_menu" },
        ],
    }),
    methods: {
        ...mapActions( "RecipeFlag", [
            "SET_toggle_show_Menu",
            "SET_toggle_show_RecipesList"
        ]),
        link_action(action_name) {
            this[action_name]();
        },
        load_menu() {
            const input = this.$refs.file_dom;
            input.addEventListener( "change", (e) => this.change_event(e) );
            input.click();
        },
        change_event(event) {
            console.log(event);
            const fr =new FileReader();
        }
    },
};
</script>

<style scoped>
a {
    display: inline-block;
    text-align: center;
    margin-right: 1rem;
}
a .link-label {
    display: block;
}
</style>
