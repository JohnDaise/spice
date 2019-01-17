

export interface State {
    token: string;
    authenticated: boolean;
} //this interface is used to set shape of state

const initialState: State = {
    token: null,
    authenticated: false
};

export function authReducer(state, action){
    return state;
}
