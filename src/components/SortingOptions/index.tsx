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
    { type: 'star', icon: faStar },
  ];

  return (
    <div className="sorting">
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
  );
};

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
      className={`sort-option ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} />
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </div>
  );
};

export default SortingOptions;
