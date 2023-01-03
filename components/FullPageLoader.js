import { ImSpinner5 } from "react-icons/im";

const FullPageLoader = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-gray-800">
      <ImSpinner5 className="mb-4 animate-spin text-6xl" />
      <p>Loading...</p>
    </div>
  );
};

export default FullPageLoader;
