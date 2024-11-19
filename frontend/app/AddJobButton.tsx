import React from "react";
import Plus from "./icons/Plus";

type Props = {
  handleOpenEditor: () => void;
};

const AddJobButton: React.FC<Props> = ({ handleOpenEditor }) => {
  return (
    <button
      className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full shadow flex space-x-2"
      onClick={() => handleOpenEditor()}
    >
      <p>Add New Job</p>
      <Plus color="white" />
    </button>
  );
};

export default AddJobButton;
