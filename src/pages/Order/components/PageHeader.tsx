import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

interface HeaderProps {
    pageTitle: string
}

function PageHeader({ pageTitle }: HeaderProps) {
    return (
        <div style={{ marginBottom: "20px" }}>
            <Breadcrumb>
                <Breadcrumb.Item href="">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item>{pageTitle}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default PageHeader;