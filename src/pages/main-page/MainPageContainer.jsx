import React, { useState, useEffect } from "react";
import API from "../../utils/newApi";
import MainPage from "./MainPage";
import InfiniteScroll from 'react-infinite-scroll-component';
import  Preloader  from "../../components/preloader/preloader";


const MainPageContainer = (props) => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    API.get("api/contents")
      .then((res) => {
        setContents(res.data.concat(res.data));
      });
  }, []);

  return (
    <InfiniteScroll
      dataLength={contents.length}
      next={() => {
        API.get("api/contents")
          .then((res) => {
            setContents(contents.concat(res.data));
          });
      }}
      hasMore={true}
      loader={<Preloader />} 
      overflow='hidden'>
      <MainPage contents={contents} />
    </InfiniteScroll>
  )
};
export default MainPageContainer;
