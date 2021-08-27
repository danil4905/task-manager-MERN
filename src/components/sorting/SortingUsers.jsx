import SearchInput from "../input/searchInput";
import { useSelector } from "react-redux";
import { writeSearch } from "../../redux/actions/usersPage-actions";
import ButtonSort from "../button/buttonSort";

const SortingUsers = (props) => {
  let currentType = useSelector((state) => state.usersPage.currentType);
  let searchValue = useSelector((state) => state.inputs.searchInputUsersPage);
  return (
    <>
      <SearchInput
        name="searchInputUsersPage"
        value={searchValue}
        text="Введите имя пользователя"
        styles="big"
        dispatcher={writeSearch}
      />
      <ButtonSort active={currentType} id="all" />
      <ButtonSort active={currentType} id="content-maker" />
      <ButtonSort active={currentType} id="manager" />
      <ButtonSort active={currentType} id="admin" />
    </>
  );
};

export default SortingUsers;
