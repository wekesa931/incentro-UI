import * as React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;

const Loader = () => {
    return <Spin indicator={antIcon} />
}

export default Loader;