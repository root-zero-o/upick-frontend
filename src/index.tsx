import  ReactDOM  from 'react-dom/client';
import styled from "styled-components";
import App from './App'
import GlobalStyle from './GlobalStyle';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { isBrowser } from "react-device-detect";
import MobileGlobalStyle from "./MobileGlobalStyle";
import store from './redux/configStore';

const StBrowserContainer = styled.div`
    width: 375px;
    height: 812px;
`;

const StMobileContainer = styled.div`
    width: 100vw;
`;

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
        <Provider store={store}>
            <BrowserRouter>
                { isBrowser ? (
                    <StBrowserContainer>
                        <GlobalStyle/>
                        <App/>
                    </StBrowserContainer>
                ) : 
                (
                    <StMobileContainer>
                        <MobileGlobalStyle/>
                        <App/>
                    </StMobileContainer>
                )}
                
            </BrowserRouter>
        </Provider>
    )

    