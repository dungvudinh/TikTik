import { SET_STATE_APP_MODAL } from "./constants";
const initState = {
    isOpenAppModal:false
}


function reducer(state, action)
{
    switch(action.type)
    {
        case SET_STATE_APP_MODAL: 
            return {...state, isOpenAppModal: !state.isOpenAppModal};
        default:
            throw new Error('Invalid action');
    }
}
export {initState};
export default reducer;