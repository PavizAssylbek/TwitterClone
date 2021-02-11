import { TagsState } from "./tags/contracts/state"
import { rootReducer } from "./rootReducer"
import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddlewaare from "redux-saga"
import rootSaga from "./saga"
import { TweetsState } from "./ducks/tweets/contracts/state"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddlewaare()

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

export interface RootState {
  tweets: TweetsState
  tags: TagsState
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
