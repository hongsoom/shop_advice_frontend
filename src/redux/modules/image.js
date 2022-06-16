// 이미지 업로드
import instance from "../../shared/Request";

const UPLOAD = 'image/UPLOAD';

export function uploadImg(imageUrl) {
    return { type: UPLOAD, imageUrl };
}

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
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "image/UPLOAD":
            console.log(action.imageUrl);
            return { imageUrl: action.imageUrl};
default:
return state;
}
}