import zh_lang from "./assets/lang/zh.json";
import en_lang from "./assets/lang/en.json";
const zh = JSON.parse(JSON.stringify(zh_lang));
const en = JSON.parse(JSON.stringify(en_lang));

export default defineI18nConfig(() => ({
  // 是否兼容之前
  legacy: false,
  // 匹配不到的语言就用 zh
  fallbackLocale: 'zh',
  messages: {
    zh,
    en
  }
}));