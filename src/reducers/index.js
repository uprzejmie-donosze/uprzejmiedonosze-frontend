import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import UserReducer from './user.reducer';

const rootReducer = combineReducers({
    user: UserReducer,
    form: FormReducer
});

export default rootReducer;
