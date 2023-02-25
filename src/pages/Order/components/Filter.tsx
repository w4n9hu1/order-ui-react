import { Input, Button, Space } from 'antd';

export function Filter() {
    return (<div>
        <Space wrap>
            <label>orderCode</label>
            <Input placeholder="OrderCode" />
            <Button type="primary">Search</Button>
        </Space>
    </div>);
}