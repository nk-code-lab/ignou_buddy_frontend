import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
// import Header from './components/Header';
import Login from './pages/Login';
import {Button, Layout, theme} from 'antd';
import Logo from './components/Sidebar/Logo';
import MenuList from './components/Sidebar/MenuList';
import ToggleThemeButton from './components/Sidebar/ToggleThemeButton';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import useToken from 'antd/es/theme/useToken';


const {Sider} =Layout;

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true)
 const [collapsed,setcollapsed] = useState(false)
 
  const toggleTheme = ()=>{
  setDarkTheme (!darkTheme);
 }
 
 const {
  token :{colorBgContainer},
 }= theme.useToken()
  return (
    <Layout>
    <Router>
      
      <Sider collapsed ={collapsed} 
       collapsible
      trigger ={null}
      theme ={darkTheme? 'dark' :'light'}
       className='sidebar'>
        <Logo/>
        <MenuList darkTheme={darkTheme}/>
        <ToggleThemeButton darkTheme={darkTheme}
        toggleTheme={toggleTheme}/>
      </Sider>
     
      {/* <Header /> */}
      {/* <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </div> */}
    </Router>

      <Layout>
        <Header className='side' style={{ padding:0,background:colorBgContainer}}>
          <Button
          type='text'
          className='toggle'
          onClick={()=> setcollapsed(!collapsed)}
          icon={collapsed ?
          <MenuUnfoldOutlined/> :
         <MenuFoldOutlined/> }/>
        </Header>
      </Layout>
    </Layout>
  )
}

export default App