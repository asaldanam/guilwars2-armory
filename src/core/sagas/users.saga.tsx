import {
  REQUEST_USER_DETAILS,
  setUsersList,
  setUsersError,
} from "core/stores/users.store";
import { fetchUsers } from "core/services";
import { call, put, takeLatest } from "redux-saga/effects";

/** Obtiene el detalle de usuario @saga */
function* getUsersSaga(action: any) {
  try {
    const { data } = yield call(fetchUsers, action.payload);
    yield put(
      setUsersList({
        total_pages: data.total_pages,
        page: data.page,
        // data: [],
        data: data.data,
      })
    );
  } catch (e) {
    yield put(
      setUsersError({
        message: e?.response?.data?.error || "error",
        status: e?.response?.status || "error",
      })
    );
  }
}

function* watchGetUsers() {
  yield takeLatest(REQUEST_USER_DETAILS, getUsersSaga);
}

export default watchGetUsers;
