import { TagsApi } from "./../../api/tagsApi"
import {
  setTags,
  setTagsLoadingState,
  TagsActionsType,
} from "./actionCreatores/index"
import { call, put, takeEvery } from "redux-saga/effects"
import { LoadingState } from "./contracts/state"

export function* fetchTagsRequest() {
  try {
    const items = yield call(TagsApi.fetchTags)
    yield put(setTags(items))
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR))
  }
}

export function* tagsSaga() {
  yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}
