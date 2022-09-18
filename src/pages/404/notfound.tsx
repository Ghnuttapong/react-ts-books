import { Empty, Layout, Row  } from 'antd';

const { Header, Content, Footer } = Layout

const Notfound: React.FC = () => (
    <div className="vh-100 flex justify-center align-center">
        <Empty />
    </div>
);

export default Notfound;