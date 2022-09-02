import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "Trải nhiệm": "Experience",
      "Trải nhiệm trực tuyến":"Online experience",
      "Nơi ở": "Places",
     "Đón tiếp khách": "Welcome guests"
    

    }
  },
  cn: {
    translation: {
      "Trải nhiệm": "經 驗",
     "Trải nhiệm trực tuyến": "真 實 體 驗",
     "Nơi ở":"住宿",
     "Đón tiếp khách":'歡迎客人'

    }
  },
    vn: {
    translation: {
      "Trải nhiệm": "Trải nhiệm",
     "Trải nhiệm trực tuyến": "Trải nhiệm trực tuyến",
     "Nơi ở":"Nơi ở",
     "Đón tiếp khách": "Đón tiếp khách"

     

    }
  }

};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;