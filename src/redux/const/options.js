import API from "../../utils/newApi";

export const optionStatus = [
  { value: "Любой", label: "Любой" },
  { value: "В работе", label: "В работе" },
  { value: "Выполнено", label: "Выполнено" },
  { value: "Ожидает согласования", label: "Ожидает согласования" },
];

export const roles = [
  { value: "content-maker", label: "Контент-мейкер" },
  { value: "admin", label: "Админ" },
  { value: "manager", label: "Менеджер" },
];

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
