import React from 'react';

type ButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    children: React.ReactNode;
};

export default function Button({
    onClick,
    type = 'button',
    className,
    variant = 'primary',
    disabled = false,
    children,
}: ButtonProps) {
    return (
        <button
            className={`btn ${
                variant === 'primary' ? 'btn-primary' : 'btn-secondary'
            } ${className ?? ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
