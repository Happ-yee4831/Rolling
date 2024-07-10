import React, { useEffect } from 'react';

function PostList() {
  const [data, setData] = useState({});

  const getData = async () => {
    const result = await getDataAsync();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return <ContextProvider></ContextProvider>;
}

export default PostList;
