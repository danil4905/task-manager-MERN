export const chooseType = (type) => {
  switch (type) {
    case "audio":
      return "Аудио";
    case "video":
      return "Видео";
    case "photo":
      return "Фото";
    default:
      return "";
  }
};
