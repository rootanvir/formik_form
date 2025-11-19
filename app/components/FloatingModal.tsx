'use client';
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const FloatingModal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-5xl h-auto max-h-[90vh] mx-4 overflow-hidden rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-6 right-3 z-10 w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg transition hover:scale-110"
        >
          <X width={25} height={25} />
        </button>

        <div className="h-full overflow-y-auto">
          {children ?? <div className="p-6 text-center text-gray-500">Floating Modal (blank)</div>}
        </div>
      </div>
    </div>
  );
};

export default FloatingModal;
