import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  return (
    <div className='h-screen container mx-auto'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-green'></h1>
        {/* <Link href='/dashboard'>
          <a>
            <button type='button' className="btn btn-primary btn-md">Click Here</button>
          </a>
        </Link>
        <div>
          Users:
          {' '}
          {users?.map((user) => (<div key={user?.name}>{user?.name}</div>))}
        </div> */}
      </div>
    </div>
  );
};

export default Home;
