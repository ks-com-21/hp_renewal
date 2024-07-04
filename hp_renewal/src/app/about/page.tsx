const Page = () => {
  return (
    <div className='md:mx-8 mx-4 my-16'>
      <h1 className='mb-10 text-4xl font-bold border-b-2 border-gray-500'>
        About
      </h1>
      <div className='flex flex-col'>
        <div className='flex flex-row mb-10 justify-between'>
          <div className='w-1/2'>
            <div className='mr-2  border-b-2 border-gray-300'>
              <p className='pb-4 text-sm text-gray-500'>会社名</p>
              <p className='pb-4'>株式会社コムファイ</p>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='ml-2  border-b-2 border-gray-300'>
              <p className='pb-4 text-sm text-gray-500'>設立年月日</p>
              <p className='pb-4'>1990年（平成2年）1月8日</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row mb-10 justify-between'>
          <div className='w-1/2'>
            <div className='mr-2  border-b-2 border-gray-300'>
              <p className='pb-4 text-sm text-gray-500'>代表者</p>
              <p className='pb-4'>代表取締役　稲葉 哲</p>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='ml-2  border-b-2 border-gray-300'>
              <p className='pb-4 text-sm text-gray-500'>資本金</p>
              <p className='pb-4'>30,000,000円</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row mb-10 justify-between'>
          <div className='w-full'>
            <div className='border-b-2 border-gray-300'>
              <p className='pb-4 text-sm text-gray-500'>事業内容</p>
              <p>クライアントサーバーシステムの設計、開発、保守</p>
              <p>Webアプリケーションの設計、開発、保守</p>
              <p>Oracle、SQLServerのデータベース設計、保守</p>
              <p>各種制御ソフトウェア設計、開発</p>
              <p className='pb-4'>各種ハード、ソフトの販売</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row mb-10 justify-between'>
          <div className='w-full'>
            <div className='border-b-2 border-gray-300'>
              <p className='pb-4 text-sm text-gray-500'>
                主要取引先（五十音順・敬称略）
              </p>
              <p>株式会社 アイティフォー</p>
              <p>株式会社 加藤製作所</p>
              <p>株式会社 クラフト</p>
              <p>株式会社 ダイフク</p>
              <p>株式会社 ハイペリオン</p>
              <p>ブレインズテクノロジー 株式会社</p>
              <p>株式会社 リースシステム企画</p>
              <p className='pb-4'>他</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='w-full'>
            <div className='mb-4'>
              <p className='mb-4 text-sm text-gray-500'>アクセス</p>
              <p>〒110-0016 東京都台東区台東1-31-10 東ビル4階</p>
              <p>JR 東京メトロ日比谷線「秋葉原」駅より徒歩7分</p>
              <p>JR「御徒町」駅より徒歩8分</p>
              <p>東京メトロ日比谷線「仲御徒町駅」より徒歩8分</p>
              <p>東京メトロ銀座線「末広町」駅より徒歩5分</p>
            </div>
            <iframe
              className='w-full md:min-h-[640px] min-h-[480px]'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9703667494073!2d139.7744172760277!3d35.70234682881334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea68dee4fed%3A0x79b0132807157a45!2z44CSMTEwLTAwMTYg5p2x5Lqs6YO95Y-w5p2x5Yy65Y-w5p2x77yR5LiB55uu77yT77yR4oiS77yR77yQIOadseODk-ODqw!5e0!3m2!1sja!2sjp!4v1720067887600!5m2!1sja!2sjp'
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
