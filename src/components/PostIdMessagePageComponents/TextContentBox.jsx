import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { StyledSection } from '../../styles/PostIdMessageStyle';

const toolbarOptions = [
  ['bold', 'italic', 'underline'],
  [{ align: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ color: [] }, { background: [] }],
];
export const formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'align',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'background',
  'color',
  'link',
  'width',
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};

const Editor = ({ content, setContent }) => {
  const handleOnChange = value => {
    setContent(value.replaceAll(/<\/?p[^>]*>/g, ''));
  };

  return (
    <ReactQuill
      value={!content ? '<br>' : `<p>${content}</p>`}
      theme="snow"
      modules={modules}
      formats={formats}
      onChange={handleOnChange}
    />
  );
};
const TextContentBox = ({ children, content, setContent }) => {
  return (
    <StyledSection>
      <label htmlFor="content">{children}</label>
      <Editor content={content} setContent={setContent} />
    </StyledSection>
  );
};

export default TextContentBox;
