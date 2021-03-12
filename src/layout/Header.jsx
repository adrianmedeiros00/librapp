import { Typography } from 'antd';

export default function Header({ title, children }) {
    return (
        <>
            <Typography.Title level={1} style={{ color: 'white', margin:'0 auto 0 3rem', display: 'flex', flexDirection:'row'}}>
            {title}{children} 
            </Typography.Title>
        </>
    )
}