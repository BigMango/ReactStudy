import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    // this is for the first Link
    const data1 = {
        from: 'Link #1',
        message: 'Welcome to KindaCode.com',
        timestamp: Date.now()
    };

    // this is for the second Link
    const aboutState = {
        from: 'Link #2',
        message: 'Just another message',
        timestamp: Date.now()
    };
    return (
        <>
            <h1>Home Page</h1>
            <p>
                <Link to="/di" state={data1}>
                    Go to DI Page (Link #1)
                </Link>
            </p>
            <p>
                <Link to="/hooks">
                    Go to Hooks Page (Link #2)
                </Link>
            </p>
            <p>
                <Link to="/about" state={aboutState}>
                    Go to About Page (Link #2)
                </Link>
            </p>
            <p>
                <Link to="/iframe" state={aboutState}>
                    Go to Iframe Page (Link #3)
                </Link>
            </p>
            <p>
                <Link to="/mobx" state={aboutState}>
                    Go to Mobx Page (Link #4)
                </Link>
            </p>

            <p>
                <Link to="/error" state={aboutState}>
                    Go to Error Page (Link #5)
                </Link>
            </p>


        </>
    );
};
