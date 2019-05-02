import { put, takeEvery, all } from "redux-saga/effects"
import { commentsLoaded, commentsError, commentsRequested } from "../actions";

const _apiBase = "http://jsonplaceholder.typicode.com";

//saga worker
function* fetchComments() {
	const api = `${_apiBase}/comments`;
	const res = yield fetch(api);
	if (!res.ok) {
		const errorMessage = `Ошибка при подгрузке данных: Function fetchComments(). Response status - ${res.status}.`;
		yield put(commentsError(errorMessage)); //TODO - inform about error
	} else {
		const comments = yield res.json();
		yield put(commentsLoaded(comments));
	}
}

//saga watcher
function* watchFetchComments() {
	yield takeEvery(commentsRequested().type, fetchComments);
}

export default function* rootSaga() {
	yield all([
		watchFetchComments()
	]);
}

