const userReducer = (state ={
    userData: [],
    loading: false,
    error: false,
}, action) => {

    const { type, payload } = action
    switch (type) {
        case "USER_START":
            return { ...state, loading: true };
        case "USER_SUCCESS":
            return { ...state, userData: payload, loading: false };
        case "USER_FAIL":
            return { ...state, loading: false, error: true };
        default:
            return { ... state };
    }
}

export default userReducer