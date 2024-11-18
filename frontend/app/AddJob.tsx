import React from "react";
import Plus from "./icons/Plus";

type Props = {
  handleOpenEditor: () => void;
};

const AddJob: React.FC<Props> = ({ handleOpenEditor }) => {
  return (
    <button
      className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full flex items-center"
      onClick={() => handleOpenEditor()}
    >
      Add New Job
      <Plus color="white" />
    </button>
  );
};

export default AddJob;
