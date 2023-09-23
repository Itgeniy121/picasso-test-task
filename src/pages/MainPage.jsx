import NavBar from "../widgets/NavBar";
import PostList from "../widgets/PostList";

const main = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <NavBar />
      <PostList />
    </div>
  );
};

export default main;
