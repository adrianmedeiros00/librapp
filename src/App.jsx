import React from 'react'
import Header from './layout/Header'
import  Footer  from './layout/Footer'
import PublicationsPage from './pages/Publications/PublicationsPage'
import StudentsPage from './pages/Students/StudentsPage'
import { Tabs } from 'antd'


const { TabPane } = Tabs

export default function App() {
  return (
    <>
      <Header title='LibrApp'/>
          <Tabs  defaultActiveKey='1' style={{marginLeft:'50px', color:'#A9A9A9', fontWeight:'bold'}}>
            <TabPane tab='Publicações' key='1'>
              <PublicationsPage />
            </TabPane>
            <TabPane tab='Alunos' key='3'>
              <StudentsPage/>
            </TabPane>
            <TabPane tab='Empréstimos' key='2'>
          
            </TabPane>
          </Tabs>
        <Footer/>
    </>
  )
}