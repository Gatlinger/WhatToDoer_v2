import { applyMiddleware, combineReducers, createStore } from "redux"
import { cardsReducer } from "./cardsReduser"

// export const store = configureStore({
//   reducer: {
//     cards: cardsReducer,
//   }
// })

// export type AppStore = typeof store
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']


//----------------

const rootReducer = combineReducers({
  cards: cardsReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// @ts-ignore
// window.store = store