import React from 'react';
import BookForm from './BookForm';

type Props = {
  id?: string[];
  open: boolean;
  onClose: () => void;
}

const Modal = (props: Props) => {
  if (!props.open) return null;

  return (
    <div onClick={props.onClose} className='fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-gray-300 bg-opacity-25'>
      <div onClick={(e) => e.stopPropagation()} className='max-w-600px w-2/5 fixed flex z-1 mt-20 bg-white shadow-xl rounded'>
        <div className='w-full flex flex-col'>
          <button onClick={props.onClose} className='flex justify-end m-3 bg-red-500 text-white p-2 rounded'>
            X
          </button>
          <div className="flex flex-col items-center mt-3 p-2">
            <BookForm id={props.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
