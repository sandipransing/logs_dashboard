

import {combineReducers} from 'redux';
// import {routerStateReducer} from 'redux-router';
import {login} from 'common/reducers/loginlogout';
import {items,AddedItemsCount,GetCartAddedItems} from 'common/reducers/items'
import {groups} from 'common/reducers/dropdown.js'
import {streams} from 'common/reducers/dropdown.js'

export default combineReducers({
 login,
 items,
 AddedItemsCount,
 GetCartAddedItems,
 groups,
 streams
 // router:routerStateReducer
})
