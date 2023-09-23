import NavBar from "../widgets/NavBar";
import { useParams } from "react-router-dom";
import { getPostById } from "../widgets/store/services/PostsService";
const SeparatePost = () => {
  const params = useParams();
  const { data, isLoading, error } = getPostById.useGetOnePostQuery(1);

  return (
    <div className='flex flex-col items-center justify-center'>
      <NavBar />
      {error && (
        <h1 className='mt-[20px] text-[20px] text-red-700'>
          Что-то пошло не так
        </h1>
      )}
      {isLoading && <span className='loader'></span>}
      {data && (
        <div className='flex border-black border-[1px] w-[600px] h-[150px] flex-col items-start justify-start mb-[30px] px-[10px] overflow-y-auto mt-[20px]'>
          <h1 className='text-[18px] font-bold'>
            {params.id}.{data.title}
          </h1>
          <h1 className='mt-[5px] text-[15px]'>{data.body}</h1>
        </div>
      )}
    </div>
  );
};

export default SeparatePost;
