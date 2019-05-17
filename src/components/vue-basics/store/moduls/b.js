const state = {
    count:10
}

const mutations = {
    add(sta,pro){
        sta.count += pro;
    },
    reduce(sta){
        sta.count--;
    }
}

const actions = {
    add:({commit},pro) => {
        commit('add',pro);
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