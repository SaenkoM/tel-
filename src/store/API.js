const options = {
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'content-type': 'application/json'
  },
  mode: 'cors',
  redirect: 'follow',
  referrer: 'no-referrer'
}

function fetchData (keys) {
  return fetch(`/fetch?keys=${keys}`).then((res) => res.json())
}

function saveData (data) {
  return fetch('/save', {
    method: 'POST',
    body: JSON.stringify(data),
    ...options
  }).then((res) => res.json())
}

function saveFile (data) {
  return fetch('/file', {
    method: 'POST',
    body: JSON.stringify(data),
    ...options
  }).then((res) => res.json())
}

export default {
  fetchData,
  saveData,
  saveFile
}
