import { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

interface PasswordInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  required?: boolean;
  className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  id,
  name,
  required = false,
  className = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDown = () => {
    setShowPassword(true);
  };

  const handleMouseUp = () => {
    setShowPassword(false);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        required={required}
        className={className}
        placeholder="********"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700 bg-transparent border-none cursor-pointer focus:outline-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <FontAwesomeIcon icon={faEye} />
      </button>
    </div>
  );
};

export default PasswordInput;
