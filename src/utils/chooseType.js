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
export const chooseFormat = (type) => {
  switch (type) {
    case 'audio':
      return ['MP3','WAV']
    case 'video':
      return ['AVI','FLV','MOV']
    case 'photo':
      return ['JPEG','JPG','PNG']
    default:
      return '';
  }
}
