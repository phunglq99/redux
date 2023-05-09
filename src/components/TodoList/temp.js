//REDUCERS
// Là 1 function
const initValue = {
    value: 0
}

const rootReducer = (state = initValue, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return {
                ...state,
                value: state.value + 1
            }
        case 'todoList/increment':
            return {
                ...state,
                value: state.value + action.payload
            }
        // không nên sử dụng vì nó vi phạm PATTERN của redux (vì mục đích của redux là nó sẽ trả về những kết quả mà chúng ta có thể dự đoán được): 
        //Math.radom(), Date.now() and request tới server (site effect)
        // PURE FUNCTION
        default:
            return state;
    }
}

// ACTION
const INCREMENT = {
    type: 'todoList/increment',
    payload: 10
}
    //Action creaters
    const increamentCreator = (data) => {
        return {
            type: 'todoList/increment',
            payload: data
        }
    }

    increamentCreator(10);

// DISPATCH
// là 1 function

// dispatch(INCREMENT) 