import "./index.scss"
const ImgIcon = (props: { icon: string }) => {
  const { icon } = props;
  return (
    <div className="anticon img-icon">
      <img src={icon} className="icon" />
    </div>
  );
};

export default ImgIcon;
