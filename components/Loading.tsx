'use client';
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function Loading() {
    const spinner = (
        <LoadingOutlined style={{ fontSize: 40, color: 'white' }} spin />
    );

    return (
        <div>
            <Spin indicator={spinner} tip="Loading..." />
        </div>
    );
}