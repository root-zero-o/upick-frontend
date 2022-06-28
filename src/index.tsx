import  ReactDOM  from 'react-dom/client';
import App from './App'
import GlobalStyle from './GlobalStyle';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyle/>
            <App/>
        </BrowserRouter>
    </Provider>
)
