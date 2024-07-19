import React, { useEffect, useRef, useState } from 'react';
import thumbEmoji from 'assets/images/thumb.png';
import dummyRecipient from 'api/dummy/dummy';

function PostId() {
  const [recipient] = useState(dummyRecipient);
  const [value, setValue] = useState(null);
  const [preview, setPreview] = useState(null);
  const ref = useRef();
  const { name, recentMessages } = recipient;

  const handleChange = e => {
    const nextValue = e.target.files[0];
    console.log(nextValue);
    setValue(nextValue);
  };

  useEffect(() => {
    if (!value) return undefined;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview(null);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <main>
      <div>
        <h1>To. {name}</h1>
        <figure>
          {recentMessages.map(message => (
            <img key={message.id} src={message.profileImageURL} alt="profile" />
          ))}
        </figure>
        <div>
          <img src={thumbEmoji} alt="emoji" />
          <p>24</p>
        </div>
        <div>
          <img src={thumbEmoji} alt="emoji" />
          <p>24</p>
        </div>
        <div>
          <img src={thumbEmoji} alt="emoji" />
          <p>24</p>
        </div>
        <img src={preview} alt="preview" />
        <input ref={ref} name="imgUrl" type="file" onChange={handleChange} />
      </div>
    </main>
  );
}

export default PostId;
