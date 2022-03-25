// https://blog.csdn.net/wdz512/article/details/114668941
// https://stackoverflow.com/questions/53561913/react-forwarding-multiple-refs
// https://stackoverflow.com/questions/62210286/declare-type-with-react-useimperativehandle
import { Button, Divider } from 'antd';
import React, {
    useRef,
    useImperativeHandle,
    forwardRef,
    useEffect
} from 'react';

const PureChild = forwardRef((props: any, ref: any) => {
    return (
        <div>
            <button ref={ref}>点我</button>
        </div>
    );
});

// 获取多个子控件
interface MuitiHandle {
    // 强类型定义
    input: JSX.Element;
    label: JSX.Element;
    focus?: () => void;
}

const MuitiChild = forwardRef<MuitiHandle>((props: any, ref: any) => {
    const labelRef = useRef<HTMLLabelElement>();
    const inputRef = useRef<HTMLInputElement>();

    // 通过这个获取多个子控件
    useImperativeHandle(ref, () => ({
        focus() {
            inputRef?.current?.focus();
        },

        get input(): HTMLInputElement | null {
            return inputRef.current;
        },

        get label(): HTMLLabelElement {
            return labelRef.current;
        }
    }));
    return (
        <div>
            <label ref={labelRef}>label</label>
            <input ref={inputRef} placeholder="input" />
        </div>
    );
});

export function ForwardRefMain() {
    const pureChild = useRef<any>();
    const muitiChild = useRef<MuitiHandle>({ input: null, label: null });
    useEffect(() => {
        setTimeout(() => {
            console.log(
                `pureChild: [${pureChild}]; muiti: label[${muitiChild.current.label}]  input[${muitiChild.current.label}]`
            );
        }, 2000);
    }, []);

    function buttonInputFocusClick(): void {
        muitiChild.current.focus();
    }
    return (
        <div>
            <PureChild ref={pureChild} />
            <Divider dashed />
            <MuitiChild ref={muitiChild} />
            <Button type="primary" size="small" onClick={buttonInputFocusClick}>
                Focus Input
            </Button>
        </div>
    );
}
