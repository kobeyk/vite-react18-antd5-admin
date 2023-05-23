import { FC, ReactElement } from 'react';
import "./index.scss"
const HeaderLogo:FC = ():ReactElement => {
  return (
    <div className="logo">
      <img 
         src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
         alt="加载失败"
         title="logo"
      />
      <span>SpringBoot3后台管理系统</span>
    </div>
  );
};

export default HeaderLogo;
