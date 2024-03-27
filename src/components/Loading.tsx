import Spinner from "@/assets/spinner.svg?react";
const Loading = () => {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center fixed top-0 left-0 z-50 bg-white-dimmed">
      <div role="status">
        <Spinner />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
