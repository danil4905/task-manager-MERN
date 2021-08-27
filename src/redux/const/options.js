import API from "../../utils/newApi";

export const optionStatus = [
  { value: "all", label: "Любой" },
  { value: "inWork", label: "В работе" },
  { value: "done", label: "Выполнено" },
  { value: "pending", label: "Ожидает согласования" },
];

export const roles = [
  { value: "content-maker", label: "Контент-мейкер" },
  { value: "admin", label: "Админ" },
  { value: "manager", label: "Менеджер" },
];
export const contentType =[
  { value: "audio", label: "Аудио" },
  { value: "video", label: "Видео" },
  { value: "photo", label: "Фото" },
]

export const getUsersOptions = async () => {
  let options = [];
  await API.get("/api/users")
    .then(
      (response) =>
        (options = response.data.map((el) => ({
          value: el._id,
          label: el.name,
        })))
    )
    .catch((error) => console.log(error));
  return options;
};
