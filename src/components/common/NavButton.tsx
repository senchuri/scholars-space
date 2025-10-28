import React from 'react';
import { Button } from '@/components/ui/button';

interface NavButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost';
  className?: string;
}

const NavButton = ({ children, onClick, variant = 'default', className }: NavButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick} className={className}>
      {children}
    </Button>
  );
};

export default NavButton;
