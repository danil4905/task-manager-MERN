const AUDIO = "audio";
const VIDEO = "video";
const PHOTO = "photo";

export const Filter = (unFiltered, parametrs) => {
  let date = "";
  if (typeof parametrs.dateInput === "object" && parametrs.dateInput) {
    date = parametrs.dateInput.toLocaleDateString().split("/").join(".");
  }
  let filtered;
  if (parametrs.select) {
    filtered = unFiltered.filter(function (v) {
      return (
        (v.name.includes(parametrs.searchInput) ||
          v.author.includes(parametrs.searchInput)) &&
        v.date.includes(date) &&
        v.status.includes(parametrs.select)
      );
    });
  } else {
    filtered = unFiltered.filter(function (v) {
      return (
        (v.name.includes(parametrs.searchInput) ||
          v.author.includes(parametrs.searchInput)) &&
        v.dateCreated.includes(date)
      );
    });
  }
  if (
    parametrs.audioActive &&
    parametrs.videoActive &&
    !parametrs.photoActive
  ) {
    return filtered.filter(function (v) {
      return v.type === AUDIO || v.type === VIDEO;
    });
  }
  if (
    parametrs.audioActive &&
    parametrs.photoActive &&
    !parametrs.videoActive
  ) {
    return filtered.filter(function (v) {
      return v.type === AUDIO || v.type === PHOTO;
    });
  }
  if (
    parametrs.photoActive &&
    parametrs.videoActive &&
    !parametrs.audioActive
  ) {
    return filtered.filter(function (v) {
      return v.type === PHOTO || v.type === VIDEO;
    });
  }
  if (
    parametrs.audioActive &&
    !parametrs.videoActive &&
    !parametrs.photoActive
  ) {
    return filtered.filter(function (v) {
      return v.type === AUDIO;
    });
  }
  if (
    !parametrs.audioActive &&
    parametrs.videoActive &&
    !parametrs.photoActive
  ) {
    return filtered.filter(function (v) {
      return v.type === VIDEO;
    });
  }
  if (
    !parametrs.audioActive &&
    !parametrs.videoActive &&
    parametrs.photoActive
  ) {
    return filtered.filter(function (v) {
      return v.type === PHOTO;
    });
  } else {
    return filtered;
  }
};
