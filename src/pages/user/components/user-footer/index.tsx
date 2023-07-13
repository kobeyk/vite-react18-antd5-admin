import "./index.scss";

interface IFooterSpanItem{
    title:string;
    url:string;
}
const spanItems:IFooterSpanItem[] = [
    {
        title:"@ Gitee.com",
        url:"https://space.bilibili.com/452968297"
    },
    {
        title:"关于我们",
        url:"https://space.bilibili.com/452968297"
    },
    {
        title:"使用条款",
        url:"https://gitee.com/appleyk"
    },
    {
        title:"帮助文档",
        url:"https://gitee.com/appleyk"
    },
    {
        title:"在线自助服务",
        url:"https://blog.csdn.net/Appleyk"
    },
    {
        title:"重发激活邮件",
        url:"https://blog.csdn.net/Appleyk"
    }
]
const UserFooter = () => {
  return (
    <>
       {
        spanItems.map((item:IFooterSpanItem,index)=>{
            return <span className="user-footer-item" key={`${index}`}><a href={`${item.url}`}>{item.title}</a></span>
        })
       }
    </>
  )
}

export default UserFooter