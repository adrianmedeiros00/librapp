import { Layout, Typography} from 'antd';

export default function Header({ title }){
    return(
       <Layout.Header style={{backgroundColor:'black'}}> 
           <Typography.Title  level={1} style={{ color:'white'}}> {title} </Typography.Title>
       </Layout.Header>
    )
}