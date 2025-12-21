import loading from '../../../assets/images/loading-dots.svg'
const LoadingBlock = () => {
  return (
    <>
      <div className="bg-neutral-700 h-[250px] rounded-lg flex justify-center items-center">
        <div className='flex justify-center flex-col items-center gap-2'>
          <img className="w-10" src={loading}/>
          <p>Loading...</p>
        </div>
      </div>
    </>
  );
};

export default LoadingBlock;
