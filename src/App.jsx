import ContentWrapper from "./components/common/ContentWrapper";
import topography from "./assets/images/topographic.png";

const App = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-100 pb-8">
          <ContentWrapper />
        </div>
        <img src={topography} className="absolute top-0 left-0 w-full h-full z-50 opacity-30"/>
      </div>
    </>
  );
};

export default App;
