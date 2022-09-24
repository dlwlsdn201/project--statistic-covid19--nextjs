// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import dashboard from './dashboard';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, dashboard });

export default reducers;
