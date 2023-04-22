import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      home: "Главная",
      cellPoint: "Торговые точки",
      TmChat: "ТмЧать Админ",
      history: "История",
      login: "Логин",
      addCellPoint: "Добавить торговую точку",
      dashboard: "Добро Пожаловать на Домашнюю  Страницу !!!",
      delete: "Удалить",
      edit: "Редактировать",
      required: "Необходимый!",
    },
  },
  tm: {
    translation: {
      home: "Baş sahypa",
      cellPoint: "Söwda Nokatlary",
      TmChat: "TmChat Admin",
      history: "Taryh",
      login: "Login",
      addCellPoint: "Söwda Nokat Goşmak",
      dashboard: "Baş Sahypa Hoş Geldiňiz !!!",
      delete: "Öçür",
      edit: "Redaktirläň",
      required: "Hökmany!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tm",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
