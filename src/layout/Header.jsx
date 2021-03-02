import { Typography } from 'antd';

export default function Header({ title }){
    return(
        <Typography.Title  level={1} style={{ color:'white', marginLeft:'3rem'}}> {title} </Typography.Title>
    )
}