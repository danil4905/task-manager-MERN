export const chooseRole = (role) => {
  switch (role) {
    case "admin":
      return "Админ";
    case "content-maker":
      return "Контент-мейкер";
    case "manager":
      return "Менеджер";
    case "all":
      return "Все";
    case "inWork":
      return "В работе"
    case "done":
      return "Выполнено"
    case "pending":
      return "Ожидает согласования";
    default:
      return '';
  }
};
