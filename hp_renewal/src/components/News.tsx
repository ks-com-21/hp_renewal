import NewsContent from './NewsContent';

const News = () => {
  const newsList = [
    {
      newsDate: '2024/06/28',
      content: '採用情報を更新しました。',
    },
    {
      newsDate: '2023/02/01',
      content:
        '適格請求書発行事業者登録番号を取得しました。（登録番号:T8010501004524）',
    },
  ];
  return (
    <div className='h-[480px] md:max-w-4xl'>
      <h1 className='mb-4 md:text-5xl text-3xl font-bold border-b-2 border-gray-500'>
        News
      </h1>
      <ul>
        {newsList.map(e => (
          <NewsContent
            key={e.content}
            newsDate={e.newsDate}
            content={e.content}
          ></NewsContent>
        ))}
      </ul>
    </div>
  );
};

export default News;
