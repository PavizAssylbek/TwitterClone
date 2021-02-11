import { setTweets, setTweetsLoadingState } from "./actionCreatores/index"
import { TweetsApi } from "../../../api/tweetsApi"
import { call, put, takeEvery } from "redux-saga/effects"
import { TweetsActionsType } from "./actionCreatores"
import { LoadingState } from "./contracts/state"

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(items))
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.LOADED))
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}
