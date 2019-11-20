import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
    // 카테고리가 선택되지 않았으면 기본값 all로 사용
    console.log(match);
    console.log(match.params);
    const category = match.params.category || 'all';
    console.log(category);
    return (
        <>
          <Categories />
          <NewsList category={category} />
        </>
    );
};

export default NewsPage;