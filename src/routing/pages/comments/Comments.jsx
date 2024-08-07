import React from "react";
import useFetch from "../../../hooks/UseFetch";

const CommentsList = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/comments");

  console.log(data);

  if (loading) return <h1>Fetching Comments, Please Wait.....</h1>;

  return (
    <div>
      <h1>Comments List Page</h1>
      {data?.comments?.length > 0
        ? data.comments.map((commentItem) => (
            <div style={{textAlign: 'center'}}>
              <h1>{commentItem.body}</h1>
              <h1>{commentItem.likes}</h1>
              <p>@{commentItem.user.username}</p>
              <p>{commentItem.user.fullName}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default CommentsList;
