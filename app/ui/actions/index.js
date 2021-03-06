import axios from 'axios'

const ROOT_URL = "https://artsfordementia.herokuapp.com/api"

export const FETCH_STORIES = "FETCH_STORIES"
export const FETCH_STORY_DETAIL = "FETCH_STORY_DETAIL"

export function fetchStories(){
    const response = axios.get(`${ROOT_URL}/stories`)

    return {
        type: FETCH_STORIES,
        payload: response
    }
}

export function fetchStoryDetail(id){
    const response = axios.get(`${ROOT_URL}/stories/${id}`)

    return {
        type: FETCH_STORY_DETAIL,
        payload: response
    }
}
