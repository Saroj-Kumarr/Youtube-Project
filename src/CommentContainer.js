import React from 'react'

const commentData = [
  {
    name: "Saroj Kumar",
    text: "This is a dummy comment, that i am crationg...",
    replies: [
      {
        name: "Saroj Kumar",
        text: "This is a dummy comment, that i am crationg...",
        replies: [
          {
            name: "Saroj Kumar",
            text: "This is a dummy comment, that i am crationg...",
            replies: [],
          },
        ],
      },
      {
        name: "Saroj Kumar",
        text: "This is a dummy comment, that i am crationg...",
        replies: [],
      },
    ],
  },
  {
    name: "Saroj Kumar",
    text: "This is a dummy comment, that i am crationg...",
  },
  ,
  {
    name: "Saroj Kumar",
    text: "This is a dummy comment, that i am crationg...",
  },
];

const Comment =({data}) => {
    return <div></div>
}

function CommentContainer() {


  return (
      <div>
          <h1 className="text-2xl font-bold">Comments :</h1>
          <Comment data={commentData[0]}/>
      
    </div>
  )
}

export default CommentContainer;
