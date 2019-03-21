
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export default function comentarios(state = [], action){
    switch(action.type){

        case RECEIVE_COMMENTS: 
        return {
            ...state,
            ...action.comments
        }

        default: 
            return state
    }

}