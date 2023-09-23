import { useState } from "react";
import PostItem from "../features/PostItem.jsx";
import { fetchPosts } from "./store/services/PostsService";
import { FixedSizeList as List } from "react-window";
const PostList = () => {
  const [limit, setLimit] = useState(100);
  const query = {
    limit: limit,
  };
  const { data, isLoading, error } = fetchPosts.useGetAllPostsQuery(query);
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-bold text-[30px]'>Список постов:</h1>
      {isLoading && <span className='loader'></span>}
      {error && (
        <h1 className='mt-[20px] text-[20px] text-red-700'>
          Что-то пошло не так
        </h1>
      )}
      {data && (
        <List
          itemSize={150}
          itemCount={limit}
          className='List'
          height={600}
          width={1000}
          id='list'
        >
          {({ index, style }) => (
            <PostItem
              id={data[index].id}
              title={data[index].title}
              description={data[index].body}
              style={style}
            />
          )}
        </List>
      )}
    </div>
  );
};

export default PostList;
