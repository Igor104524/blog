import React, { PropsWithChildren } from 'react';
import { FaCode, FaSun } from 'react-icons/fa';

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="p-4 flex justify-between">
      <div className="flex items-center gap-2">
        <FaCode className="text-lg" />
        Igor Code
      </div>
      <div className="flex items-center gap-5">
        <a className="font-light text-gray-300 hover:text-white" href="">
          Documentation
        </a>
        <a className="font-light text-white over:text-gray-300" href="">
          Case Studies
        </a>
        <a className="font-light text-gray-300 hover:text-white" href="">
          Resources
        </a>
        <a className="font-light text-white hover:text-gray-300" href="">
          <FaSun />
        </a>
      </div>
    </header>
  );
};

export default Header;
