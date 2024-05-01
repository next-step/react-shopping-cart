import { css } from '@styled-system/css';
import { Link } from '@tanstack/react-router';
import { Typography } from '@/components';

type MenuLinkProps = {
  title: string;
  path: string;
};

export const MenuLink = ({ title, path }: MenuLinkProps) => (
  <Link key={path} to={path}>
    <Typography
      variant="headline"
      className={css({
        color: 'white',
        fontSize: {
          base: '15px',
          sm: '20px',
        },
      })}
    >
      {title}
    </Typography>
  </Link>
);

MenuLink.displayName = 'MenuLink';
