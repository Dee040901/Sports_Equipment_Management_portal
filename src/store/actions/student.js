export const issueStudent = (entry_no,sport,equipment,issue,return_,quantity,curr_quantity) => {
return (dispatch, getState, { getFirebase, getFirestore }) => {
    // const firebase = getFirebase();
    const firestore = getFirestore();

    return firestore
    .collection("Students")
    .doc(entry_no)
    .collection("Issued-items")
    .add({
        Sport:sport,
        Equipment:equipment,
        Issued_date:issue,
        Return_date:return_,
        Quantity:quantity
    })
    .then((res) => {
          return firestore
          .collection("Equipments")
          .doc(sport)
          .collection("Issued")
          .doc(res.id)
          .set({
            Email:entry_no,
            Equipment:equipment,
            Issue_date:issue,
            Return_date:return_,
            Quantity:quantity
          })
          .then((resp) => {
                return firestore
                .collection("Equipments")
                .doc(sport)
                .collection("Total_equipments")
                .doc(equipment)
                .set({
                    issued: curr_quantity+quantity
                })
                .then(resp_=>{
                    console.log(res,resp,resp_);
                })
          });
    })
    .catch((err) => {
        console.log(err);
    });
};
};
