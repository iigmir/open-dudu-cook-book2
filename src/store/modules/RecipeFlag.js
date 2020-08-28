const state = {
    sorted_type: "",
    sorted_tag: "",
    sorted_id: "",
    show_Menu: true,
    show_RecipesList: true
};
const mutset = {
    sorted_type: "set_sorted_type",
    sorted_tag: "set_sorted_tag",
    sorted_id: "set_sorted_id",
    show_Menu: "set_show_Menu",
    show_RecipesList: "set_show_RecipesList"
};

const getters = {
    sorted_type_getter(state) {
        return state.sorted_type;
    },
    sorted_tag_getter(state) {
        return state.sorted_tag;
    },
    sorted_id_getter(state) {
        return state.sorted_id;
    },
    shown_flag_getter(state) {
        return {
            show_Menu: state.show_Menu,
            show_RecipesList: state.show_RecipesList,
        };
    },
};

const mutations = {
    [mutset.sorted_type](state, value = "") {
        state.sorted_type = value;
    },
    [mutset.sorted_tag](state, value = "") {
        state.sorted_tag = value;
    },
    [mutset.sorted_id](state, value = "") {
        state.sorted_id = value;
    },
    [mutset.show_Menu](state, value = true) {
        state.show_Menu = value;
    },
    [mutset.show_RecipesList](state, value = true) {
        state.show_RecipesList = value;
    },
};

const actions = {
    SET_sorted_type({ commit }, value = "") {
        commit( mutset.sorted_type, value );
    },
    SET_sorted_tag({ commit }, value = "") {
        commit( mutset.sorted_tag, value );
    },
    SET_sorted_id({ commit }, value = "") {
        commit( mutset.sorted_id, value );
    },
    SET_toggle_show_Menu({ commit, state }) {
        commit( mutset.show_Menu, !state.show_Menu );
    },
    SET_toggle_show_RecipesList({ commit, state }) {
        commit( mutset.show_RecipesList, !state.show_RecipesList );
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
