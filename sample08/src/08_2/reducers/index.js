import { combineReducers } from "redux";
import {
    REQUEST_POSTS, RECEIVE_POSTS, //←次項以降importを足していくのでコンマを書いておいてください
    ERROR_FETCH_POSTS,
    CHANGE_FORM_VALUE,
} from "../actions";

const initialStatePosts = {
    posts: [],
    isFetchError: false
    // 次項で通信エラーに関するプロパティを追加します
}
function posts(state = initialStatePosts, action) {
    switch (action.type) {
        // REQUEST_POSTSでは変更するStateはない
        case REQUEST_POSTS:
            return state;
        case RECEIVE_POSTS:
            /*
            現在のStateを基に新しいStateを作る
            スプレッド構文では現在のStateが展開される
            その後ろに新しいStateのプロパティを書くと同じプロパティ名のものは上書きされる
            */
            return {
               ...state,
                posts: action.posts,
                // 次項で別のプロパティを追加します
                isFetchError: false
            };
        case ERROR_FETCH_POSTS:
            return {
               ...state,
                isFetchError: true
            };
        default:
            return state;
    }
}
const initialStateForm = {
    text: "",
    // 次項で通信エラーに関するプロパティを追加します
}
function form(state = initialStateForm, action) {
    switch (action.type) {
        case CHANGE_FORM_VALUE:
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return state;
    }
}
  
export default combineReducers({
    posts,
    form
});