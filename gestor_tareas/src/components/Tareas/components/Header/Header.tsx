import { useCreateTask } from "./hooks";

const Header = () => {
  const { renderModal, openModal } = useCreateTask();
  return (
    <div className="flex m-10">
      <h1 className="text-4xl font-bold">Tasks</h1>
      <button
        onClick={openModal}
        className="px-10 py-3 font-medium text-base text-center rounded-full border hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 ml-auto"
      >
        Add Task
      </button>
      {renderModal()}
    </div>
  );
};

export default Header;
