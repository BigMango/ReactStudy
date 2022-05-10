import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  // this is for the first Link
  let index = 0;
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
          Go to DI Page (Link #{++index})
        </Link>
      </p>
      <p>
        <Link to="/class">
          Go to Class Component Page (Link #{++index})
        </Link>
      </p>
      <p>
        <Link to="/hooks">
          Go to Hooks Page (Link #{++index})
        </Link>
      </p>
      <p>
        <Link to="/about" state={aboutState}>
          Go to About Page (Link #{++index})
        </Link>
      </p>
      <p>
        <Link to="/iframe" state={aboutState}>
          Go to Iframe Page (Link #{++index})
        </Link>
      </p>
      <p>
        <Link to="/mobx" state={aboutState}>
          Go to Mobx Page (Link #{++index})
        </Link>
      </p>

      <p>
        <Link to="/error" state={aboutState}>
          Go to Error Page (Link #{++index})
        </Link>
      </p>
    </>
  );
};
