import { useRef } from 'react';
import { MdRefresh } from 'react-icons/md';

const RestartButton = ({ onRestart, className = '' }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    onRestart();
  };

  return (
    <button
      tabIndex={-1} // to prevent focus
      ref={buttonRef}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
      onClick={handleClick}
    >
      <MdRefresh className="w-6 h-6" />
    </button>
  );
};

export default RestartButton;
