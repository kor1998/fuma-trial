import type { LucideIcon } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';

export default function IconContainer({
  icon: Icon,
  ...props
}: {
  icon?: LucideIcon;
} & ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      {Icon ? <Icon className="size-4" /> : null}
    </div>
  );
}
