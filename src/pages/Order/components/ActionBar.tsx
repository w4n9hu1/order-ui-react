import { Radio } from 'antd';

export function ActionBar() {
    let size = "small";
    return (<div style={{ margin: "20px 0" }}>
        <Radio.Group value={size}>
            <Radio.Button value="add">Add</Radio.Button>
            <Radio.Button value="edit">Edit</Radio.Button>
            <Radio.Button value="print">Print</Radio.Button>
        </Radio.Group>
    </div>);
}
