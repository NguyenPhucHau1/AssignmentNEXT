import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

const TintucForm = () => {
  const [formData, setFormData] = useState({
    titleVN: '',
    titleEN: '',
    describeVN: '',
    describeEN: '',
    contentVN: '',
    contentEN: '',
    image: '',
    tacgia: '',
    loai: 0,
    trangthai: 1,
  });

  // Refs for TinyMCE editors
  const editorVnRef = useRef(null);
  const editorEnRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (content, editor, name) => {
    setFormData({ ...formData, [name]: content });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/tintucs/add', formData);
      console.log('Response:', response.data);
      alert('Thêm tin tức thành công!');
      setFormData({
        titleVN: '',
        titleEN: '',
        describeVN: '',
        describeEN: '',
        contentVN: '',
        contentEN: '',
        image: '',
        tacgia: '',
        loai: 0,
        trangthai: 1,
      });
    } catch (error) {
      console.error('Lỗi khi thêm tin tức:', error);
      alert('Thêm tin tức thất bại');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="titleVN">Tiêu đề VN:</label>
        <input type="text" className="form-control" name="titleVN" value={formData.titleVN} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="titleEN">Tiêu đề EN:</label>
        <input type="text" className="form-control" name="titleEN" value={formData.titleEN} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="describeVN">Mô tả VN:</label>
        <textarea className="form-control" name="describeVN" rows="4" value={formData.describeVN} onChange={handleChange}></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="describeEN">Mô tả EN:</label>
        <textarea className="form-control" name="describeEN" rows="4" value={formData.describeEN} onChange={handleChange}></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="contentVN">Nội dung VN:</label>
        <Editor
          apiKey="sxuecqw6ie1p3ksawpdq4piz7jvlucsub11a6z83r8atnksh" 
          onInit={(evt, editor) => { editorVnRef.current = editor; }}
          initialValue={formData.contentVN}
          init={{
            height: 300,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={(content) => handleEditorChange(content, editorVnRef.current, 'contentVN')}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contentEN">Nội dung EN:</label>
        <Editor
          apiKey="sxuecqw6ie1p3ksawpdq4piz7jvlucsub11a6z83r8atnksh" 
          onInit={(evt, editor) => { editorEnRef.current = editor; }}
          initialValue={formData.contentEN}
          init={{
            height: 300,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={(content) => handleEditorChange(content, editorEnRef.current, 'contentEN')}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Link Hình ảnh:</label>
        <input type="text" className="form-control" name="image" value={formData.image} onChange={handleImageChange} />
      </div>

      <div className="form-group">
        <label htmlFor="tacgia">Tác giả:</label>
        <input type="text" className="form-control" name="tacgia" value={formData.tacgia} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="loai">Loại:</label>
        <select className="form-control" name="loai" value={formData.loai} onChange={handleChange}>
          <option value={0}>Tin Thường</option>
          <option value={1}>Sự Kiện</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="trangthai">Trạng thái:</label>
        <select className="form-control" name="trangthai" value={formData.trangthai} onChange={handleChange}>
          <option value={1}>Hoạt động</option>
          <option value={0}>Không hoạt động</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Thêm tin tức</button>
    </form>
  );
};

export default TintucForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const TintucForm = () => {
//   const [formData, setFormData] = useState({
//     titleVN: '',
//     titleEN: '',
//     describeVN: '',
//     describeEN: '',
//     contentVN: '',
//     contentEN: '',
//     image: '',
//     tacgia: '',
//     loai: 0,
//     trangthai: 1,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleEditorChange = (name, editor) => {
//     const data = editor.getData();
//     setFormData({ ...formData, [name]: data });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/tintucs/add', formData);
//       console.log('Response:', response.data);
//       alert('Thêm tin tức thành công!');
//       setFormData({
//         titleVN: '',
//         titleEN: '',
//         describeVN: '',
//         describeEN: '',
//         contentVN: '',
//         contentEN: '',
//         image: '',
//         tacgia: '',
//         loai: 0,
//         trangthai: 1,
//       });
//     } catch (error) {
//       console.error('Lỗi khi thêm tin tức:', error);
//       alert('Thêm tin tức thất bại');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="titleVN">Tiêu đề VN:</label>
//         <input type="text" className="form-control" name="titleVN" value={formData.titleVN} onChange={handleChange} />
//       </div>

//       <div className="form-group">
//         <label htmlFor="titleEN">Tiêu đề EN:</label>
//         <input type="text" className="form-control" name="titleEN" value={formData.titleEN} onChange={handleChange} />
//       </div>

//       <div className="form-group">
//         <label htmlFor="describeVN">Mô tả VN:</label>
//         <textarea className="form-control" name="describeVN" rows="4" value={formData.describeVN} onChange={handleChange}></textarea>
//       </div>

//       <div className="form-group">
//         <label htmlFor="describeEN">Mô tả EN:</label>
//         <textarea className="form-control" name="describeEN" rows="4" value={formData.describeEN} onChange={handleChange}></textarea>
//       </div>

//       <div className="form-group">
//         <label htmlFor="contentVN">Nội dung VN:</label>
//         <CKEditor
//           editor={ClassicEditor}
//           data={formData.contentVN}
//           onChange={(event, editor) => handleEditorChange('contentVN', editor)}
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="contentEN">Nội dung EN:</label>
//         <CKEditor
//           editor={ClassicEditor}
//           data={formData.contentEN}
//           onChange={(event, editor) => handleEditorChange('contentEN', editor)}
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="image">Link Hình ảnh:</label>
//         <input type="text" className="form-control" name="image" value={formData.image} onChange={handleChange} />
//       </div>

//       <div className="form-group">
//         <label htmlFor="tacgia">Tác giả:</label>
//         <input type="text" className="form-control" name="tacgia" value={formData.tacgia} onChange={handleChange} />
//       </div>

//       <div className="form-group">
//         <label htmlFor="loai">Loại:</label>
//         <select className="form-control" name="loai" value={formData.loai} onChange={handleChange}>
//           <option value={0}>Tin Thường</option>
//           <option value={1}>Sự Kiện</option>
//         </select>
//       </div>

//       <div className="form-group">
//         <label htmlFor="trangthai">Trạng thái:</label>
//         <select className="form-control" name="trangthai" value={formData.trangthai} onChange={handleChange}>
//           <option value={1}>Hoạt động</option>
//           <option value={0}>Không hoạt động</option>
//         </select>
//       </div>

//       <button type="submit" className="btn btn-primary">Thêm tin tức</button>
//     </form>
//   );
// };

// export default TintucForm;
