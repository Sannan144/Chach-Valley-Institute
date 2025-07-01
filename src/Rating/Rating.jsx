import { FaUserGraduate, FaBoxOpen, FaStar, FaRegStar } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';

const Rating = () => {
  const ratingData = [
    {
      text: '10k Students',
      icon: <FaUserGraduate />,
    },
    {
      text: '100+ Products',
      icon: <FaBoxOpen />,
    },
    {
      text: '500+ Orders',
      icon: <MdShoppingCart />,
    },
  ];

  return (
    <div className='bg-black w-full py-5 flex-wrap flex justify-between px-8 items-center gap-6 text-white'>

      <div className='flex items-center justify-center md:justify-start gap-2 text-lg text-center flex-grow-1'>
        <span>Rated Excellent</span>
        <span className='flex gap-1 text-2xl text-[#eeee84]'>
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <FaRegStar />
        </span>
      </div>

      <div className='flex justify-between flex-grow-2 gap-2 '>
        {ratingData.map((item, index) => (
            <div key={index} className='flex flex-col md:flex-row items-center gap-2 text-lg'>
                <span className='text-2xl text-[#255235]'>{item.icon}</span>
                <span className='text-[12px] sm:text-[16px]'>{item.text}</span>
            </div>
        ))}
      </div>

    </div>
  );
};

export default Rating;
