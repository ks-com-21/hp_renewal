const NewsContent = ({ newsDate, content }) => {
  return (
    <div className='flex flex-start py-2 text-sm'>
      <span className='pr-2'>{newsDate}</span>
      <span className='font-bold'>{content}</span>
    </div>
  );
};

export default NewsContent;
