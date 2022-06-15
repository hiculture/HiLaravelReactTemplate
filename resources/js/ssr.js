import {createInertiaApp} from "@inertiajs/inertia-react";
import createServer from "@inertiajs/server";


//antd配置
import {ConfigProvider} from "antd";
import zhCN from "antd/lib/locale/zh_CN";

//moment配置
import moment from "moment";
import "moment/locale/zh-cn";
import React from "react";
import ReactDOMServer from "react-dom/server";

moment.locale("zh-cn");

createServer((page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: name => require(`./Pages/${name}`),
    setup: ({App, props}) =>
        <ConfigProvider locale={zhCN}>
            <App {...props} />
        </ConfigProvider>,
}));
