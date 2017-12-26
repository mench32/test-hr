import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'components/App';
import store from 'store';

const render = Component => {
	ReactDOM.render(
	  <AppContainer>
		<Component />
	  </AppContainer>,
	  document.getElementById('root'),
	)
  }

  render(App)

  if (module.hot) {
	module.hot.accept('components/App', () => render(App))
  }
