import { Select } from "antd";
import { useTranslation } from "react-i18next";
import "./index.scss";

const SwitchI18n = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (e: any) => {
    i18n.changeLanguage(e);
  };
  const options = [
    {
      value: "zh-CN",
      label: t("common.chinese"),
    },
    {
      value: "zh-TW",
      label: t("common.chinesetw"),
    },
    {
      value: "en-US",
      label: t("common.english"),
    },
  ];
  return (
    <div className="switch-i18n">
      <Select
        showSearch
        defaultValue={i18n.language}
        placeholder={t("common.changeLanguage")}
        onChange={(e) => changeLanguage(e)}
        options={options}
      />
    </div>
  );
};

export default SwitchI18n;
