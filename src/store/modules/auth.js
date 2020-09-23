import firebase from "firebase";

export default {
  actions: {
    async signIn({ dispatch }, { email, password }) {
      try {
        console.log("signIn");
        await firebase.auth().signInWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}`)
          .once("value")
          .then(user => {
            return user.val();
          });
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async signUp(
      { dispatch },
      {
        email,
        password,
        firstName,
        lastName,
        dateOfBirth,
        country,
        address,
        postcode,
        phone
      }
    ) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}`)
          .set({
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            dateOfBirth: dateOfBirth,
            country_of_residence: country,
            address: address,
            postcode: postcode,
            phone: phone,
            best_score: 0
          });
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async signOut() {
      try {
        await firebase.auth().signOut();
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async getLeaderboard() {
      return firebase
        .database()
        .ref("/score")
        .once("value")
        .then(function(snapshot) {
          return snapshot.val();
        });
    }
  }
};
