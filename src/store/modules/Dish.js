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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
