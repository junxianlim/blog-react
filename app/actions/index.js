import axios from 'axios';

const HIDE_FLASH = 'HIDE_FLASH';
const DELETE_POST = 'DELETE_POST';
const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POST = 'FETCH_POST';
const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'stratossjxlim';

export function hideFlash() {
  return {
    type: HIDE_FLASH,
    payload: ''
  }
}

export function deletePost(id) {
  const URL = `${ROOT_URL}/posts/${id}`
  const params = {
    key: API_KEY
  }

  let request = axios.delete(URL, { params: params })

  return {
    type: DELETE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const URL = `${ROOT_URL}/posts/${id}`
  const params = {
    key: API_KEY
  }
  let request = axios.get(URL, { params: params })

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function fetchPosts() {
  const URL = `${ROOT_URL}/posts`
  const params = {
    key: API_KEY
  }
  let request = axios.get(URL, { params: params })

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  const URL = `${ROOT_URL}/posts`
  const params = {
    key: API_KEY,
    categories: props.categories,
    title: props.title,
    content: props.content
  }
  let request = axios.post(URL, params)

  return {
    type: CREATE_POST,
    payload: request
  }
}
