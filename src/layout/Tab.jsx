import { Tabs } from 'antd'

export default function Tab(props){
    return(
        <Tabs.TabPane tab={props.tab} key={props.key}>
           
        </Tabs.TabPane>
    )
}