import firebase from "firebase";
export default {
  state: () => ({
    email: null,
    password: null,
  }),
  mutations: {},
  actions: {
    async saveScore({ dispatch }, score) {
      try {
        console.log("saveScore");
        const user = firebase.auth().currentUser;
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/score/${uid}`)
          .set({
            email: user.email,
            score: score,
          });
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
};
