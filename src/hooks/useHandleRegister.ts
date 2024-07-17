import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { showAlert } from "../utilities/alert";
import { useAppDispatch } from "../store/hooks";
import { UserResponseAuthFirebase } from "../types/user.type";
import { setUser } from "../store/slices/user.slice";

export const useHandleRegister = () => {
  const dispatch = useAppDispatch();

  const handleSignUp = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
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

  return { handleSignUp };
};
