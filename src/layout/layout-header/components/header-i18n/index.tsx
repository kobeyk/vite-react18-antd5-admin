import { Select } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";

const SwitchI18n = () => {
  const [language, setLanguage] = useState<string>("zh-CN");
  const { t, i18n } = useTranslation();
  const changeLanguage = (e: any) => {
    setLanguage(e);
    i18n.changeLanguage(e);
  };
  const options = [
    {
      value: "zh-cn",
      label: t("common.chinesetw"),
    },
    {
      value: "zh-tw",
      label: t("common.chinesetw"),
    },
    {
      value: "en-us",
      label: t("common.english"),
    },
  ];
  return (
    <div className="switch-i18n">
      <label>{t("common.changeLanguage")}</label>
      <Select
        defaultValue={language}
        onChange={(e) => changeLanguage(e)}
        options={options}
      />
    </div>
  );
};

export default SwitchI18n;
