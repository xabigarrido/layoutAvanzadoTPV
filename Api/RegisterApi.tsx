import { auth, db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (newUser) => {
  try {
    const data = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password
    );
    const user = data.user;
    const collectionUser = collection(db, "UsuariosNews");
    await addDoc(collectionUser, {
      name: "Xabier",
      subname: "Garrido",
      id: user.uid,
      email: user.email,
    });
    return { estado: true, mensaje: "Todo bien" };
  } catch (error) {
    return { estado: false, mensaje: error.code };
  }
};
