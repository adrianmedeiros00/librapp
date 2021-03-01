import React from 'react'
import Header from './layout/Header'
import Tab from './layout/Tab'
import { Tabs } from 'antd'


export default function App() {
  return (
    <>
      <Header title='LibrApp'/>
      <Tabs defaultActiveKey='1' style={{marginLeft:'50px', color:'black', fontWeight:'bold'}}>
        <Tab tab='Publicações' key='1' />
        <Tab tab='Empréstimos' key='2' />
        <Tab tab='Alunos' key='3' />
      </Tabs>
      
    </>
  )
}