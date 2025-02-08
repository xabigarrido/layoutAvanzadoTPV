import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useAuth } from "../Context/AuthContext";

export const loginUser = async (user) => {
  try {
    const data = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    return { estado: true, data: data.user };
  } catch (error) {
    throw { estado: false, data: error.code };
  }
};
