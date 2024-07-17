import { signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../store/hooks";
import { auth } from "../../firebaseConfig";
import { UserResponseAuthFirebase } from "../types/user.type";
import { setUser } from "../store/slices/user.slice";
import { showAlert } from "../utilities/alert";

export const useHandleLogin = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user: UserResponseAuthFirebase = {
          email: userCredential.user.email || "",
          uid: userCredential.user.uid,
          token: userCredential.user.refreshToken,
        };

        dispatch(setUser(user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        showAlert(true, errorMessage);
      });
  };

  return { handleLogin };
};
