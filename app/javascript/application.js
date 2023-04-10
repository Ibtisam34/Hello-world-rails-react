import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import greetingReducer from '../reducers/greetingReducer';
const store = createStore(greetingReducer, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Greeting} />
        </div>
      </Router>
    </Provider>
  );
};
