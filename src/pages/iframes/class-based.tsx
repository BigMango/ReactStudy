import React, { Component } from 'react';
import { createPortal } from 'react-dom';

interface ClassBasedIFrameComponentProp {
    title: string;
}

interface ClassBasedIFrameComponentState {
    mountNode: any;
}

export class ClassBasedIFrameComponent extends Component<ClassBasedIFrameComponentProp, ClassBasedIFrameComponentState> {
    constructor(props: ClassBasedIFrameComponentProp) {
        super(props);
        this.state = {
            mountNode: null
        };
        this.setContentRef = this.setContentRef.bind(this);
    }

    setContentRef(contentRef: HTMLIFrameElement) {
        this.setState({
            mountNode: contentRef?.contentWindow?.document?.body
        });
    };

    render() {
        const { children, title, ...props } = this.props;
        const { mountNode } = this.state;
        return (
            <iframe
                title={title}
                {...props}
                ref={this.setContentRef}
            >
                {mountNode && createPortal(children, mountNode)}
            </iframe>
        );
    }
}
