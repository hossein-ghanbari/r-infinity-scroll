import { useEffect } from "react";
import useReactInfinityScroll from "./useReactInfinityScroll";

function App() {
  const onEndReached = () => {
    // fetch next page data
  };

  useEffect(() => {
    //  fetch first page data
  }, []);

  const { bottomBoundaryRef } = useReactInfinityScroll(onEndReached, "80px"); // margin can be percent or pixel

  return (
    <>
      <div>{/* rendering your data list  */}</div>

      <div ref={bottomBoundaryRef}>{/* loader component */}</div>
    </>
  );
}

export default App;
