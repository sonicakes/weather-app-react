import loading from '../../assets/images/loading-dots.svg'
const LoadingBlock = () => {
  return (
    <>
      <div className="bg-neutral-700 min-h-[200px] rounded-lg flex justify-center items-center">
        <div>
          <img className="w-10" src={loading}/>
          <p>Loading...</p>
        </div>
      </div>
    </>
  );
};

export default LoadingBlock;
