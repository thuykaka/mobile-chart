import React from 'react'
import { FormattedMessage } from 'react-intl';
import { WhiteSpace, List } from 'antd-mobile';
import { Table } from 'antd';
import Chart from '../chart';

const FinancialIndicators = () => {
    console.log('FinancialIndicators')
    const data = {
        labels: ['1900', '1950', '1999', '2050', '2051', '2052', '2053'],
        datasets: [
            {
                type: 'line',
                borderColor: '#3e95cd',
                data: [1000, 2210, 7830, 2478, 3000, 4000, 5000],
                fill: false,
                borderWidth: 2
            },
            {
                type: 'bar',
                backgroundColor: 'rgba(0,0,0,0.2)',
                backgroundColorHover: '#3e95cd',
                data: [1000, 2210, 7830, 2478, 3000, 4000, 5000],
                labels: 'Bar',
                borderWidth: 0
            },
        ],
    }

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street ',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return <div style={{
        backgroundColor: '#fff', padding: '5px 15px'
    }}>
        <p> <FormattedMessage id="app.content-of" /> FinancialIndicators</p>
        <List renderHeader={() => 'Định giá'} className="my-list">
            <List.Item extra={'extra content'}>Title</List.Item>
            <List.Item extra={'extra content'}>Title2</List.Item>
            <List.Item extra={'extra content'}>Title</List.Item>
        </List>
        <WhiteSpace />
        <List renderHeader={() => 'Khả năng sinh lời'} className="my-list">
            <List.Item extra={'extra content'}>Title</List.Item>
            <List.Item extra={'extra content'}>Title2</List.Item>
            <List.Item extra={'extra content'}>Title</List.Item>
        </List>
        <WhiteSpace />
        <Chart data={data} lable="Test" />
        <WhiteSpace />
        <Chart data={data} lable="Test" />
        <WhiteSpace />
        <Table size="small" pagination={{ position: [] }} dataSource={dataSource} columns={columns} scroll={{ x: 200 }} />
    </div>
}

export default FinancialIndicators