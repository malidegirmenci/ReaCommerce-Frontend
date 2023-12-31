import * as types from './globalActionTypes';
import  instanceAxios  from '../../../api/axiosInstance';


export const updateRoles = () => {
    return (dispatch) => {
        instanceAxios.get("/roles")
            //console.log(response)
            .then((response) => {
                dispatch({ type: types.UPDATE_ROLES, payload: response.data });
            })
            .catch((error) => {
                console.log("Roles Fetching Error: " + error.message);
            });
    };
};

export const updateCategories = () => {
    return (dispatch) => {
        instanceAxios.get("/categories")
            .then((response) => {
                //console.log(response)
                dispatch({ type: types.UPDATE_CATEGORIES, payload: response.data });
            })
            .catch((error) => {
                console.log("Categories Fetching Error: " + error.message);
            });
    };
};
export const updateTheme = (theme) => {
    return {
        type: types.UPDATE_THEME,
        paylaod: theme,
    };
};
export const updateLanguage = (language) => {
    return {
        type: types.UPDATE_LANGUAGE,
        paylaod: language,
    };
};