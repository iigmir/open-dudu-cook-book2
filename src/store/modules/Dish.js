const default_item = {
    name: "",
    source: "",
    cooking: "",
    time: "",
    ctype: "",
    stype: "",
    taste: "",
    season: "",
    style: ""
};

const state = {
    item: default_item,
};

const getters = {
    dish_item(state) {
        return state.item;
    },
    has_content(state) {
        return state.item.name.length > 0;
    }
};

const mutations = {
    set_item(state, input = default_item) {
        state.item = input;
    },
};
const actions = {
    SET_item({ commit }, input = default_item) {
        commit("set_item", input);
    },
    SET_item_by_feature({ commit, rootState }, input = "") {
        const list = rootState.Recipes.default_list.book.record;
        const result = list.filter( item => item.name === input );
        if( result.length > 0 ) {
            if( result.length > 1 ) {
                console.warn( "Have more than one dishes, choose the first one: ", result[0] );
            }
            commit("set_item", result[0]);
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
