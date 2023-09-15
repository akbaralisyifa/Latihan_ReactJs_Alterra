import { combineReducers, configureStore, applyMiddleware } from "@reduxjs/toolkit";
import passengerSlice from "./passengerSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";


// mengkombinasi reducer yang isinya => fungsi passangerSlice pada file passangerSlice
const reducers = combineReducers({
    passanger: passengerSlice
})

// membuat configurasi storage
const persistConfig = {
    key : "passanger",
    storage
};

// menggabungkan persist reducer nya
const persistedReducers = persistReducer(persistConfig, reducers);

// meng konfigurasi store nya
const store = configureStore({
    reducer : persistedReducers,
    middleware : [thunk]
});

//membuat persistor
const persistor = persistStore(store);

export {store, persistor};