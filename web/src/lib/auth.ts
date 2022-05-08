import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebase } from "../config/firebase.config";

export const authProviders = {
  google: new GoogleAuthProvider(),
  github: new GithubAuthProvider(),
};

export type ProvidersTypes = keyof typeof authProviders;

const auth = getAuth(firebase);

export function firebaseSocialAuth(type: ProvidersTypes) {
  const provider = authProviders[type];

  signInWithPopup(auth, provider)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
