import * as api from '../api'

import { STUDENT_REQUEST_FIX, STUDENT_REQUEST_RETURN, STUDENT_GET_FIX_REQUEST, STUDENT_GET_RETURN_REQUEST } from '../constants/constants'

export const studentRequestFix = (formData) => async (dispatch) => {
    try {
        const {data} = await api.requestFix(formData);

        return dispatch({type: STUDENT_REQUEST_FIX, data});
    } catch (error) {
        return {message: error.response.data.message}
    }
}

export const studentRequestReturn = (formData) => async (dispatch) => {
    try {
        const {data} = await api.requestFix(formData);

        return dispatch({type: STUDENT_REQUEST_RETURN, data});

    } catch (error) {
        return {message: error.response.data.message}

    }
}

export const studentGetRequestFix = () => async (dispatch) => {
    try {
        const {data} = await api.getRequestFix();

        return dispatch({type: STUDENT_GET_FIX_REQUEST, data});

    } catch (error) {
        return {message: error.response.data.message}

    }
}

export const studentGetReturnFix = () => async (dispatch) => {
    try {
        const {data} = await api.getRequestReturn();

        return dispatch({type: STUDENT_GET_RETURN_REQUEST, data});

    } catch (error) {
        return {message: error.response.data.message}

    }
}