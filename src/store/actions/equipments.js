export const getEquipments = (sport) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // const firebase = getFirebase();
      const firestore = getFirestore();
  
      return firestore
        .collection("Equipments")
        .doc(sport)
        .collection("Total_equipments")
        .get()
        .then((res) => {
          // console.log(res);
          let arr = [];
          res.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
          dispatch({ type: "GET_EQUIPMENTS", payload: arr });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

export const issuedEquipments = (sport) => {
return (dispatch, getState, { getFirebase, getFirestore }) => {
    // const firebase = getFirebase();
    const firestore = getFirestore();

    return firestore
    .collection("Equipments")
    .doc(sport)
    .collection("Issued")
    .get()
    .then((res) => {
        // console.log(res);
        let arr = [];
        res.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: "ISSUED_EQUIPMENTS", payload: arr });
    })
    .catch((err) => {
        console.log(err);
    });
};
};

  