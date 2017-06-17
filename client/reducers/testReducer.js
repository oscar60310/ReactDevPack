export default function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case "TEST_COUNT": {
            return { ...state, count: state.count + action.payload }
        }
    }
    return state;
}