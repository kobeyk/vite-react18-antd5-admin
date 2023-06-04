import "./index.scss";

interface IFooterSpanItem{
    title:string;
    url:string;
}
const spanItems:IFooterSpanItem[] = [
    {
        title:"@ Gitee.com",
        url:"https://www.baidu.com"
    },
    {
        title:"关于我们",
        url:"https://www.baidu.com"
    },
    {
        title:"使用条款",
        url:"https://www.baidu.com"
    },
    {
        title:"帮助文档",
        url:"https://www.baidu.com"
    },
    {
        title:"在线自助服务",
        url:"https://www.baidu.com"
    },
    {
        title:"重发激活邮件",
        url:"https://www.baidu.com"
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