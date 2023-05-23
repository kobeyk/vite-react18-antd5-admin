import { FC } from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import "./index.scss"
const CollapseIcon:FC<{
    bCollapse:boolean,setCollapse:React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
    bCollapse,setCollapse
}) => {

  return (
    <div className="slider-collapse"
        onClick={()=>{setCollapse(!bCollapse)}}
    >
     {
        bCollapse ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
     }   
    </div>
  )
}

export default CollapseIcon