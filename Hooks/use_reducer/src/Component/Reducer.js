// action is the object 
function reducer(state, action) {
    switch (action.type) {
        case "changed_name":
            {
                return {
                    name: action.nextName,
                    age: state.age
                }
            }

        case "increment_age": {
            return {
                name: state.name,
                age: state.age + 1
            }
        }

        default:
            throw Error("Unknown action" + action.type);

    }
}

export default reducer;