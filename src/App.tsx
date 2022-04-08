import React from 'react';
import 'reflect-metadata';
import { InjectDemo } from './pages/ioc-component/di-component';
import { container } from './lib/ioc/ioc';
import { Provider } from './lib/ioc/ioc.react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Hooks } from './pages/hooks-component/Hooks';
import 'antd/dist/antd.css';
import { IFrameMain } from './pages/iframes/ifreme';
import { MobxMain } from './pages/mobx/mobx';
window.name = 'main';
const App = () => {
    return (
        <Provider container={container}>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/di" element={<InjectDemo />} />
                        <Route path="/hooks" element={<Hooks />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/iframe" element={<IFrameMain />} />
                        <Route path="/mobx" element={<MobxMain />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
