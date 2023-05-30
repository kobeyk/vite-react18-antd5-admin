import GeneralUtils from "@/utils/general";
import { Breadcrumb } from "antd";
import sliderMenus from "@/routes/menu/sliderMenus";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
/** 自定义面包屑，主要实现通过路由地址来反推菜单栏 */
const BreadCrumb = () => {
  const {pathname} = useLocation();
  const [items,setItems] = useState<Array<any>>();
  const flatMenus = GeneralUtils.getFlatMenuRoutes(sliderMenus);
  useEffect(() => {
    /** 首选我们拿到当前路由地址栏的pathname，然后构建数组 */
    const routes = pathname.split("/").filter(Boolean)
    let dataItems:any = [];
    routes.map((rItem:any)=>{
      flatMenus.map((mItem:any)=>{
          /** 将路由pathname转换成对应的menuName */
          if (rItem === mItem.name) {
            dataItems.push({title:mItem.label})
          }
      })
    })
    setItems(dataItems)
  },[pathname])

  return <Breadcrumb separator=">" items={items}></Breadcrumb>;
};

export default BreadCrumb;
