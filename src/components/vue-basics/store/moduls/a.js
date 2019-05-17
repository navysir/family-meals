const state = {
    money:100
}

const mutations = {
    add(state){
        state.money+=100;
    },
    reduce(state){
        state.money-=100;
    }
}

const actions = {
    add:({commit}) => {
        commit('add');
    },
    reduce:({commit}) => {
        commit('reduce');
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}