import { Table } from 'antd';

const dataSource = [
    {
        key: '1',
        orderCode: 'OC202302021234',
        weight: 3.2,
        amount: 2,
        createTime:"2023/2/3"
    },
    {
        key: '2',
        orderCode: 'OC202302022362',
        weight: 4.1,
        amount: 1,
        createTime:"2023/2/15"
    },
];

const columns = [
    {
        title: 'OrderCode',
        dataIndex: 'orderCode',
        key: 'orderCode',
    },
    {
        title: 'Weight',
        dataIndex: 'weight',
        key: 'weight',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'CreateAt',
        dataIndex: 'createTime',
        key: 'createTime',
    },
];

export function TableList() {
    return (<Table dataSource={dataSource} columns={columns} />);
}
