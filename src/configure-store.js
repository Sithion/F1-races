import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@reducers';
import Sagas from '@sagas';
import {DevTools} from '@components';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const composeStore = [applyMiddleware(...middlewares)];
if(process.env.dev){
	composeStore.push(DevTools.instrument());
}
export default (initialState) => {
	const store = createStore(
		rootReducer,
		initialState,
		compose(...composeStore)
	);
	sagaMiddleware.run(Sagas);
	return store;
}