import { useEffect, useState } from "react";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import screefull from "screenfull"
import { message } from "antd";
const FullScreen = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(screefull.isFullscreen)
  useEffect(() => {
    /** 监听全屏切换状态 */
    screefull.on('change',()=>{
      setFullScreen(screefull.isFullscreen)
      return ()=> screefull.off('change',()=>{})
    })
  },[])
  const handleFullScreen = () => {
     if (!screefull.isEnabled) {
        message.warning('当前您的浏览器不支持全屏 ❌')
        return;
     }
     /**如果可用，就可以全屏*/
     screefull.toggle();
  }
  return (
    <div className="header-right-fullscreen" onClick={handleFullScreen}>
      {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
    </div>
  );
};

export default FullScreen;
