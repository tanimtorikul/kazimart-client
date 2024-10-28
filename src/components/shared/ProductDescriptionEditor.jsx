import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductDescriptionEditor = ({ value, onChange }) => {
  return (
    <div className="rich-text-editor">
      <label className="block text-sm font-medium mb-2">Description</label>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder="Enter product description"
        className="w-full border rounded-md"
        modules={{
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            ["clean"],
          ],
        }}
      />
      <style>
        {`
          .ql-container {
            background-color: white;
            border-radius: 8px
          }
          .ql-editor {
            background-color: white;
            color: black;
            min-height: 150px;
            border-radius: 8px; 
          }
        `}
      </style>
    </div>
  );
};

export default ProductDescriptionEditor;
