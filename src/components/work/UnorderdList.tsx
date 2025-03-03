import React, { FC, ReactNode } from 'react';

interface UnorderedListProps {
  children: ReactNode;
}

const UnorderedList: FC<UnorderedListProps> = ({ children }) => {
  return <ul className="list-disc list-inside text-gray-300 space-y-3">{children}</ul>;
};

export default UnorderedList;
