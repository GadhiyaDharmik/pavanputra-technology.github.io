import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import qs from 'qs';
// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"

//Include Both Helper File with needed methods
// import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper"
import { postJwtLoginNew } from "../../../helpers/fakebackend_helper";

// const fireBaseBackend = getFirebaseBackend()

function* loginUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const userData ={email: user.email, password: user.password}
      let config = {
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        }        
      }
      // userData = qs.stringify(userData);
      const response = yield call(postJwtLoginNew, userData, config)
      yield localStorage.setItem("authUser", JSON.stringify(response))
      yield localStorage.setItem("accessToken", response.data.data.accessToken)
      yield put(loginSuccess(response))
      // history.push("/dashboard")
    }
    
  } catch (error) {
    yield put(apiError("something wrong"))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
    //   const fireBaseBackend = getFirebaseBackend()
    //   const response = yield call(
    //     fireBaseBackend.socialLoginUser,
    //     data,
    //     type,
    //   )
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else {
      const response = yield call(postSocialLogin, data)
      
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    // history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeLatest(SOCIAL_LOGIN, socialLogin)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
