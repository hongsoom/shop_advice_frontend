// 이미지 업로드
import axios from 'axios';
import instance from "../../shared/Request";
// import { handleActions } from 'redux-actions';
// import produce from 'immer';

// const PREVIEW = 'image/PREVIEW';
const UPLOAD = 'image/UPLOAD';

// export function previewImg(preview_img) {
//     return { type: PREVIEW, preview_img };
// }
export function uploadImg(imageUrl) {
    return { type: UPLOAD, imageUrl };
}

// const initialState = {
// 	imageUrl: null,
// 	preview: null,
// };
// const imageUpload = createAction(UPLOAD, (imageUrl) => ({ imageUrl }));

const initialState = {
	imageUrl: null,
};


export const uploadimageFB = (formData) => {
    return async (dispatch, getState, { history }) => {
        await instance
        .post("/api/image", formData, 
            {headers: { 'Content-Type': 'multipart/form-data' }})
        .then((res) => {
        const imageUrl = res.data.imageUrl;
        console.log(imageUrl);        
        alert("The file is successfully uploaded");
        dispatch(uploadImg(imageUrl))
        })
        .catch((err) => {
        console.log(err);
        });
        };
}

// reducer
// export default handleActions(
// 	{
// 		[UPLOAD]: (state, action) =>
// 			produce(state, (draft) => {
// 				draft.imageUrl = action.payload.imageUrl;
// 			}),
// 		// [PREVIEW]: (state, action) =>
// 		// 	produce(state, (draft) => {
// 		// 		draft.preview = action.payload.preview;
// 		// 	}),
// 	},
// 	initialState,
// );

// const imageCreators = {
// 	// setPreview,
// 	imageUpload,
// };

// export { imageCreators };
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "image/UPLOAD":
            console.log(action.imageUrl);
            return { imageUrl: action.imageUrl};
default:
return state;
}
}