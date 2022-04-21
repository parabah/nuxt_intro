export const state = () => ({
    user: {}
  })
  
export const mutations = {
  SET_USER(state, user) {
    state.user = user;
   }
 }

export const actions = {
    setUser({commit}, user){
       commit('SET_USER', user);
    }
}