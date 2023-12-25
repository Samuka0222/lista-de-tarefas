import { faImage, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBtn from "../../IconBtn";

import React from "react";

const CreateNote = () => {
  return (
    <form className="w-11/12 h-10 flex justify-between ring-2 ring-neon-light rounded-md px-4 ">
      <div className="hidden">
        <input
          className="bg-transparent w-9/12 outline-none"
          type="text"
          placeholder="Crie sua nota"
        />
      </div>
      <div className="w-full h-10 flex justify-between">
        <input
          className="bg-transparent w-9/12 outline-none"
          type="text"
          placeholder="Crie sua nota"
        />
        <span className="text-2xl h-full flex gap-4">
          <IconBtn children={<FontAwesomeIcon icon={faSquareCheck} />} />
          <IconBtn children={<FontAwesomeIcon icon={faImage} />} />
        </span>
      </div>
    </form>
  );
};

export default CreateNote;
