import { useCreateUser } from "./hooks";

const Header = () => {
  const { renderModal, openModal } = useCreateUser();
  return (
    <div className="flex justify-between items-center my-10">
      <h1 className="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl">
        Users
      </h1>
      <a
        onClick={openModal}
        className="inline-flex items-center justify-center px-2 py-1.5 text-base text-center rounded-xl focus:ring-4 border hover:bg-gray-100 cursor-pointer"
      >
        Add User
      </a>
      {renderModal()}
    </div>
  );
};

export default Header;
