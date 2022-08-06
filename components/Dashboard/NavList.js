/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Collapse from '../UI/Collapse';

const NavList = ({ item, isOpen, toggle }) => {
  const router = useRouter();

  return (
    <>
      <Link href={item.path} key={item.id}>
        <a className="font-maven font-medium text-sm">
          <li
            className={
              item.path.includes(router.pathname.split('/')[1])
                ? 'flex items-center  text-green bg-[#252d57] mb-1'
                : 'flex items-center  text-light-gray mb-1 hover:bg-[#252d57] hover:text-green transition-all duration-300 ease-in-out'
            }
            onClick={() => toggle()}
          >
            <div
              className={classNames(
                'w-[0.188rem] h-10 ',
                {
                  'bg-green': item.path.includes(router.pathname.split('/')[1]),
                },
                {
                  ' hover:bg-mintcream transition-all duration-300 ease-in-out':
                    !item.path.includes(router.pathname.split('/')[1]),
                },
              )}
            />
            <item.icon className="icon m-3 text-green" />
            {' '}
            {item.title}
          </li>
        </a>
      </Link>
      {item.children.length ? (
        <ul
          className={`pl-[3.3125rem] space-y-3 transition-all duration-300 ${
            isOpen ? 'max-h-full' : 'max-h-0 overflow-hidden'
          }`}
        >
          <Collapse isActive={isOpen}>
            {item?.children?.map((subItem) => (
              <li key={subItem?.id} className="my-3">
                <Link href={subItem?.path}>
                  <a>
                    <p
                      className={classNames('font-maven leading-[1.0281rem]', {
                        'text-green': router.pathname === subItem?.path,
                      })}
                    >
                      {subItem?.title}
                    </p>
                  </a>
                </Link>
              </li>
            ))}
          </Collapse>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavList;
