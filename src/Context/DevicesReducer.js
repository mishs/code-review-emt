export default function DevicesReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_ACTIVEROW':
            return {
                ...state,
                activeRow: action.payload,
            }
        case 'UPDATE_ACTIVEGROUP':
            return {
                ...state,
                activeGroup: action.payload,
            }

        case 'UPDATE_ACTIVESGROUP':
            return {
                ...state,
                activeSGroup: action.payload,
            }
        case 'UPDATE_FILTERS':
            return {
                ...state,
                filters: action.payload,
            }
        case 'UPDATE_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload,
            }
        case 'UPDATE_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload,
            }

        case 'UPDATE_DATA':
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}
