import firebase from "firebase";

export default {
  actions: {
    async signIn({ dispatch }, { email, password }) {
      try {
        console.log("signIn");
        await firebase.auth().signInWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        const user = await firebase
          .database()
          .ref(`/users/${uid}`)
          .once("value")
          .then(user => {
            return user.val();
          });
        const user_info = await firebase
          .database()
          .ref(`/user_info/${uid}`)
          .once("value")
          .then(user_info => {
            return user_info.val();
          });

        console.log(user);
        console.log(user_info);
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
        countryOfResidence,
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
            password: password
          });
        await firebase
          .database()
          .ref(`/user_info/${uid}`)
          .set({
            first_name: firstName,
            last_name: lastName,
            dateOfBirth: dateOfBirth,
            country_of_residence: countryOfResidence,
            address: address,
            postcode: postcode,
            phone: phone
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
    }
  }
};
