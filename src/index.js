import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import {
  reactReduxFirebase,
  getFirebase,
  isLoaded
} from "react-redux-firebase";
import firebaseConfig from "./store/config/fbConfig";

/* const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig, { useFirestoreForProfile:true, userProfile:'users',attachAuthIsReady: true }), // redux binding for firebase
    reduxFirestore(firebaseConfig) // redux bindings for firestore
  )
); */

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig),
    reduxFirestore(firebaseConfig, { attachAuthIsReady: true })
  )
);

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <AuthIsLoaded>
      <App />
    </AuthIsLoaded>
  </Provider>,
  document.getElementById("root")
);
