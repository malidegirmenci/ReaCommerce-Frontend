import * as types from './globalActionTypes';
import { instanceAxios } from '../../store';


export const updateRoles = () => {
    return (dispatch) => {
        instanceAxios.get("/roles")
            .then((response) => {
                dispatch({ type: types.UPDATE_ROLES, payload: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const updateCategories = () => {
    return (dispatch) => {
        instanceAxios.get("/categories")
            .then((response) => {
                console.log(response)
                dispatch({ type: types.UPDATE_CATEGORIES, payload: response.data });
            })
            .catch((error) => {
                console.log(error);
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