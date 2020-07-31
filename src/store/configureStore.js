// import thunk from "redux-thunk";
// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./rootReducer";
// import promise from "redux-promise-middleware";


//    export const store = createStore(
//         rootReducer(url),
//         initialState,
//         composeEnhancers(applyMiddleware(...[thunk, promise].concat(...middleware)))
//     );
// export default store;

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from "./rootReducer";

// // const initialState = {};
// const middleware = [thunk];
// const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

// export default store;

import {createStore} from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}