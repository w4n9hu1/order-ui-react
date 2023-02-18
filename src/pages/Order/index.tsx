import 'antd/dist/reset.css';
import PageHeader from './components/PageHeader';

function Filter() {
    return (<h1>Filter</h1>);
}

function ActionBar() {
    return (<h1>ActionBar</h1>);
}

function TableList() {
    return (<h1>TableList</h1>);
}

function OrderQuery() {
    return (<div className="App">
        <PageHeader pageTitle='OrderQuery'/>
        <Filter />
        <ActionBar />
        <TableList />
    </div>);
}

export default OrderQuery;