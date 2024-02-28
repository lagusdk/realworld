import React from 'react';
import { getPosts } from '../api/posts';

const Home: React.FC = () => {
  const handleClick = async () => {
    // 버튼 클릭 시 실행할 내용
    try {
        const posts = await getPosts();
        console.log(posts);
        // API 응답을 처리하거나 상태를 업데이트할 수 있습니다.
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>버튼</button>
    </div>
  );
};

export default Home;