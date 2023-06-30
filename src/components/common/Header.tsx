import { Link, redirect } from 'react-router-dom';

function Header() {
  const token = localStorage.getItem('accessToken');

  const onClickHandler = () => {
    // 로그아웃 처리 API
    redirect('/login');
  };

  return (
    <header className='bg-black'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between '>
          <h1 className='cursor-pointer text-sm font-bold text-white sm:text-xl'>
            wanted-pre-onboarding-frontend
          </h1>
          {token !== null ? (
            <div>
              <button
                onClick={onClickHandler}
                className='nline-flex items-center justify-center rounded-md p-2 font-bold text-gray-200 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div className='flex text-sm sm:text-[16px] '>
              <Link
                to='/login'
                className='nline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              >
                로그인
              </Link>
              <Link
                to='/join'
                className='nline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              >
                회원가입
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;