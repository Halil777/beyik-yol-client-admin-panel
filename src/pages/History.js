import { Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function History() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t("history")} | {t("TmChat")}
        </title>
      </Helmet>
      <Typography>{t("home")}</Typography>
    </>
  );
}
