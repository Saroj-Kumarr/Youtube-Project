import React from "react";

const CommentsData = [
  {
    name: "Jay shri ram",
    text: "This is ram name comment",
    replies: [],
  },
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
            replies: [
              {
                name: "Saroj Kumar",
                text: "This is a dummy comment, that i am crationg...",
                replies:[]
              },
            ],
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
    replies:[]
  },
  ,
  {
    name: "Saroj Kumar",
    text: "This is a dummy comment, that i am crationg...",
    replies:[]
  },
  {
    name: "Saroj Kumar",
    text: "This is a dummy comment, that i am crationg...",
    replies:[]
  },
  ,
  {
    name: "Saroj Kumar",
    text: "This is a dummy comment, that i am crationg...",
    replies:[]
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex bg-slate-200">
      <div>
        <img
          class="w-12 mr-2"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
          alt="user-image"
        />
      </div>
      <div>
        <h3 className="font-bold ">{name}</h3>
        <h3 className="font-medium text-sm">{text}</h3>
        {/* <h3 className="font-medium text-sm">{replies}</h3> */}
      </div>
    </div>
  );
};

const CommentsList = ({ comm }) => {
  return comm.map((obj, index) => {
    return (
      <div>
        <Comment key={index} data={obj} />
        <div className="pl-2 m-2 bg-gray-100 border-l-2 border-black">
          <CommentsList comm={obj.replies} />
        </div>
      </div>
    );
  });
};

function CommentContainer() {
  return (
    <div>
      <h1 className="text-xl ml-2 mt-2 font-bold">Comments :</h1>
      <CommentsList comm={CommentsData} />
    </div>
  );
}

export default CommentContainer;
