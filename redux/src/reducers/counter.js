const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            console.log("From Reducer - Inc")
            return state + action.payload;
        case "DECREMENT":
            console.log("From Reducer - Dec")
            return state - 1;
        default:
            console.log("From Reducer - Def")
            return state
    }
}

export default counterReducer