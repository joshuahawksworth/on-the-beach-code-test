import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDown, faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';

interface SortingOptionsProps {
  activeSort: string;
  onChange: (type: string) => void;
}

const SortingOptions: React.FC<SortingOptionsProps> = ({ activeSort, onChange }) => {
  const options = [
    { type: 'alphabetically', icon: faSortAlphaDown },
    { type: 'price', icon: faDollarSign },
    { type: 'star rating', icon: faStar },
  ];

  return (
    <div className="sorting-container flex flex-col mx-16 px-2">
      <div className=" w-full">
        {options.map((option, index) => (
          <SortOption
            key={index}
            type={option.type}
            active={activeSort === option.type}
            icon={option.icon}
            onClick={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default SortingOptions;

interface SortOptionProps {
  type: string;
  active: boolean;
  icon: any;
  onClick: (type: string) => void;
}

const SortOption: React.FC<SortOptionProps> = ({ type, active, icon, onClick }) => {
  const handleClick = () => {
    onClick(type);
  };

  return (
    <div
      className={`sort-option flex justify-between items-center justify-center px-3 py-3 mb-0.5 cursor-pointer ${active ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'}`}
      onClick={handleClick}
    >
      <span className="mr-16 font-normal">
        <span>sort by </span>
        <span className="font-bold">{type}</span>
      </span>
      <FontAwesomeIcon icon={icon} className={`${active ? 'text-white' : 'text-gray-400'}`} />
    </div>
  );
};
