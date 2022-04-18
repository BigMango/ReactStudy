import React from 'react';
import PropTypes from 'prop-types';
interface ErrorMainProps {
    name: string;
    uid: string;
    layout: string;
}
export class ErrorMain extends React.Component<ErrorMainProps> {
    render() {
        return (
            <>
                <ErrorChild {...this.props} level={3} />
                <h1>Hello, {this.props.name}</h1>
            </>
        );
    }
}



interface ErrorChildProp {
    level?: number;
}

export class ErrorChild extends React.Component<ErrorChildProp> {
    static propTypes = {
        level: PropTypes.string
    };
    render() {
        // 这里应该错误的啊,为什么没有出现 React does not recognize the xxx prop on a DOM告警?
        return <div {...this.props}>Child</div>;
    }
}
