import React from 'react';
import ReactDOM from 'react-dom';
import { nextTick } from '@arco-design/mobile-utils';
import { GlobalContextParams } from '../context-provider';

export interface ToastBaseProps {
    getContainer?: () => HTMLElement;
    onClose?: (scene?: string) => void;
    content?: React.ReactNode;
    // 强制定义的属性
    visible?: boolean;
    close?: (e) => void;
    type?: string;
    loading?: boolean;
}

export function toast<P extends ToastBaseProps>(
    Component: React.FunctionComponent<P>,
    type?: string,
) {
    type Config = Omit<P, 'visible' | 'close'>;
    return (originConfig: string | Config, context?: GlobalContextParams) => {
        const config =
            typeof originConfig === 'string'
                ? ({
                      content: originConfig,
                      type: 'info',
                  } as Config)
                : originConfig;

        if (type !== void 0) {
            config.type = type;
            config.loading = type === 'loading';
        }

        const div = document.createElement('div');
        document.body.appendChild(div);

        function render(props) {
            ReactDOM.render(<Component {...Object.assign(props, { context })} />, div);
        }

        function destory() {
            const { onClose } = config;
            onClose && onClose();
            const unmountResult = ReactDOM.unmountComponentAtNode(div);
            if (unmountResult && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }

        let dynamicProps = {
            ...config,
            close,
            getContainer: () => div,
            onClose: destory,
            visible: false,
        };
        let leaving = false;

        function update(newConfig: Config) {
            dynamicProps = {
                ...dynamicProps,
                ...newConfig,
            };
            render(dynamicProps);
        }

        function close() {
            leaving = true;
            dynamicProps.visible = false;
            render(dynamicProps);
        }

        render(dynamicProps);
        nextTick(() => {
            // 在即将打开时发现已经调用了close则取消打开操作
            // @en When it is about to be opened, it is found that close has been called and the open operation is canceled
            if (leaving) return;
            dynamicProps.visible = true;
            render(dynamicProps);
        });

        return {
            update,
            close,
            hide: close,
        };
    };
}
