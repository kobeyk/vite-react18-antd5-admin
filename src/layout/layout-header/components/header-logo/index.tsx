import i18n from '@/i18n';
import LocaleHelper from '@/utils/helper/localeHelper';
import { FC, ReactElement } from 'react';
import "./index.scss";
const HeaderLogo:FC = ():ReactElement => {
  return (
    <div className="logo">
      <img 
         src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
         alt="加载失败"
         title="logo"
      />
      <span>{i18n.t(LocaleHelper.getSystemTitle())}</span>
    </div>
  );
};

export default HeaderLogo;
