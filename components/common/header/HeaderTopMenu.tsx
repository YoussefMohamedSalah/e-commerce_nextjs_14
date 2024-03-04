import { useTranslations } from 'next-intl';
import React from 'react';
import cn from 'classnames';
import Link from '@/components/ui/link';

interface MenuProps {
  data: any;
  className?: string;
  classNameLink?: string;
};

export default function HeaderTopMenu({ data, className, classNameLink }: MenuProps) {
  const t = useTranslations('Header');

  return (
    <ul
      className={cn(className)}
    >
      {data?.map((item: any) => (
        <li key={item.id} >
          <Link href={item.path}>
            {t(item.label)}
          </Link>
        </li>
      ))}
    </ul>
  )
}
