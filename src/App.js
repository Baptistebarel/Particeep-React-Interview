import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import DisplayMovies from './pages/DisplayMovies/DisplayMovies';

const middleware = [logger, thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={DisplayMovies} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
