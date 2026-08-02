
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import {  UserOutlined } from '@ant-design/icons';
import style from './Header.module.css'
import {useNavigate} from 'react-router'
import '@ant-design/v5-patch-for-react-19';

import {removeData} from './../../utils'


interface Iprops{
  value :boolean
}
function Header(props:Iprops) {
  const handleMenuClick: MenuProps['onClick'] = () => {
    Logout();
    
  };
  const items: MenuProps['items'] = [
    {
      label: 'Logout',
      key: '1',
    },
  ];
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const Navigate = useNavigate();
  const Logout =()=>{
    console.log('data');
    removeData('user');
    Navigate('/')
  }
  return (
    <>
    <div className={style.Header} >
      {
        props.value?(
<div>
    <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined /> } 
    onClick={() => Navigate('/startQuiz')} >
    Start Quiz
  </Dropdown.Button>
</div>

        ):
        (
<div>
<Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined /> } >
  </Dropdown.Button>
      </div>
        )
      }
    </div>
</>
  )
}

export default Header