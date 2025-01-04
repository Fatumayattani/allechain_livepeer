import React from 'react';

export function IconButton({ icon: Icon, onClick, className, title }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full hover:bg-gray-200 transition-colors ${className}`}
      title={title}
    >
      <Icon size={20} />
    </button>
  );
}
