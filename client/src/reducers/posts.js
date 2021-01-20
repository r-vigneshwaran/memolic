import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../constants/actionTypes";

export const Posts = (posts = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...posts, action.payload];
        case FETCH_ALL:
            return action.payload;
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return posts.filter((post)=>post._id!== action.payload)
        default:
            return posts;
    }
}