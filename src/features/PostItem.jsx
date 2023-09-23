import React from "react";
import { useNavigate } from "react-router-dom";
const PostItem = ({ title, description, id, style }) => {
  const router = useNavigate();
  return (
    <div
      className='flex border-black border-[1px] w-[600px] h-[150px] flex-col items-start justify-start mb-[30px] px-[10px] overflow-y-auto'
      style={style}
    >
      <h1 className='text-[18px] font-bold'>
        {id}. {title}
      </h1>
      <h1 className='mt-[5px] text-[15px]'>{description}</h1>
      <button
        onClick={() => router(`/post/${id}`)}
        className='border-none bg-cyan-500 w-[100px] h-[30px] rounded-[5px] hover:bg-cyan-600'
      >
        Открыть
      </button>
    </div>
  );
};

export default PostItem;
