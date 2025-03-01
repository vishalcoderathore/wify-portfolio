'use client';
import { ReactElement } from 'react';

export default function Objective(): ReactElement {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-100 pattern-bg">
      {/* Left Div */}
      <div className="w-full md:w-1/2 h-96 border-2 border-red-500 flex items-center justify-center">
        {/* Left Content Goes Here */}
        <p className="text-gray-500">Left Section (Add your content here)</p>
      </div>

      {/* Right Div */}
      <div className="w-full md:w-1/2 h-96 border-2 border-red-500 flex items-center justify-center">
        {/* Right Content Goes Here */}
        <p className="text-gray-500">Right Section (Add your content here)</p>
      </div>
    </section>
  );
}
