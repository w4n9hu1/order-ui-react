import 'antd/dist/reset.css';
import { ActionBar } from './components/ActionBar';
import PageHeader from './components/PageHeader';
import { TableList } from './components/TableList';
import { Filter } from './components/Filter';

function OrderQuery() {
    return (<div className="App">
        <PageHeader pageTitle='OrderQuery'/>
        <Filter />
        <ActionBar />
        <TableList />
    </div>);
}

export default OrderQuery;