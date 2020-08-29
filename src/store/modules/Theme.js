const state = {
    theme_name: "",
};
const mutset = {
    theme_name: "set_theme_name",
};

const getters = {};

const mutations = {
    [mutset.theme_name](state, value = "") {
        state.theme_name = value;
    }
};

const actions = {
    SET_theme_name({ commit }, value = "") {
        commit( mutset.theme_name, value );
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
