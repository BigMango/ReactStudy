/* eslint-disable react/no-children-prop */
import React, { Component, useState } from 'react';
import { ClassBasedIFrameComponent } from './class-based';
import { FunctionalIFrameComponent } from './functional';
import { WithClonedStyles } from './with-cloned-styles';
// https://stackoverflow.com/questions/34743264/how-to-set-iframe-content-of-a-react-component
// https://codesandbox.io/s/react-iframe-examples-36k1x?fontsize=14&hidenavigation=1&theme=dark&file=/src/examples/class-based.js

interface IfremaContentProp {
    Content: string;
}

class IfremaContent extends React.PureComponent<IfremaContentProp> {
    render() {
        return (
            <>
                <h2>{this.props.Content}</h2>
                <p>window:{window?.name}</p>
            </>);
    }
}

export class IFrameMain extends React.Component {
    render() {
        return (
            <div>
                <IFrameSrcDoc />
                <ClassIframe content='<h1>SimpleIframe</h1>' />
                <FunctionalIFrameComponent title="FunctionalIFrameComponent">
                    {/* <h1>IFrameHooks</h1> */}
                    <IfremaContent Content='Functional iframe component' />
                </FunctionalIFrameComponent>
                <ClassBasedIFrameComponent title="ClassBasedIFrameComponent">
                    {/* <h1>IFrameHooks</h1> */}
                    <IfremaContent Content="Class based iframe component" />
                </ClassBasedIFrameComponent>
                <link
                    data-frame
                    rel="stylesheet"
                    href="/src/pages/iframes/external.css" />

                <WithClonedStyles title="with-cloned-styles" styleSelector="link[data-frame]">
                    <>
                        <p className="external">
                            secure-box:/ guest$ ../
                        </p>
                        <IfremaContent Content="With cloned styles" />
                    </>
                </WithClonedStyles>
            </div>
        );
    }
}

class IFrameSrcDoc extends React.PureComponent {
    myHTML = '<h1>Hello World</h1>';

    render() {
        return (
            <iframe srcDoc={this.myHTML} />
        );
    }
}

interface SimpleIframeProp {
    content: string;
}
class ClassIframe extends Component<SimpleIframeProp, any> {
    render() {
        const parseHtml = html => new DOMParser().parseFromString(html, 'text/html').body.innerText;
        return <iframe srcDoc={parseHtml(this.props.content)} />;
    }
}
