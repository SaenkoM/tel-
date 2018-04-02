import { put, takeEvery } from 'redux-saga/effects'
import API from './API'

import { DATA, addDataAction } from './Data/actions'

const filterData = (data) => {
  const { message, success, ...filteredData } = data
  return filteredData
}

const separateData = (payload) => {
  const formData = {}
  const files = []

  Object.keys(payload).forEach((key) => {
    if (payload[key] && typeof payload[key] === 'object' && payload[key][0]) {
      files.push({
        data: payload[key][0],
        type: key
      })
    } else {
      formData[key] = payload[key]
    }
  })

  return { formData, files }
}

const uploadFiles = (files) => {
  Promise.all(files.map((file) => {
    return new Promise((resolve) => {
      const fileReader = new FileReader()

      fileReader.onload = () => {
        resolve({ file: fileReader.result, type: file.type })
      }

      fileReader.readAsDataURL(file.data)
    }).then((file) => API.saveFile(file))
  }))
}

function * fetchData (action) {
  try {
    const data = yield API.fetchData(action.payload)
    yield put(addDataAction(filterData(data)))
  } catch (e) {
    yield put({ type: DATA.FETCH_FAILED, payload: e.message })
  }
}

function * saveData ({ payload }) {
  const { formData, files } = separateData(payload)

  try {
    yield uploadFiles(files)

    yield put(addDataAction(formData))

    const data = yield API.saveData(formData)

    yield put({ type: DATA.SAVE_SUCCEEDED, payload: data })
  } catch (e) {
    yield put({ type: DATA.SAVE_FAILED, payload: e.message })
  }
}

function * rootSaga () {
  yield takeEvery(DATA.FETCH, fetchData)
  yield takeEvery(DATA.SAVE, saveData)
}

export default rootSaga
