import React from 'react';

import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Поиск по дате и времени..."
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка"
        options={[
          {value: 'f_x', name: 'По оси x'},
          {value: 'f_y', name: 'По оси y'},
        ]}
      />
    </div>
  );
};

export default PostFilter;
