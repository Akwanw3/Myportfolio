import '@/styles/Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  icon,
  ...props 
}) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
