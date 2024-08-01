// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CommentSection from './comment';

// const TinTucDetail = ({ tintuc, language }) => {
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         const fetchComments = async () => {
//             try {
//                 const response = await axios.get(http://localhost:3000/comments?tintucId=${tintuc._id});
//                 setComments(response.data);
//             } catch (error) {
//                 console.error('Lỗi tải bình luận:', error);
//             }
//         };

//         fetchComments();
//     }, [tintuc._id]);

//     if (!tintuc) {
//         return <div>Đang tải...</div>;
//     }

//     const { titleVN, titleEN, describeVN, describeEN, contentVN, contentEN, image, tacgia, createdAt } = tintuc;
//     const title = language === 'vi' ? titleVN : titleEN;
//     const description = language === 'vi' ? describeVN : describeEN;
//     const content = language === 'vi' ? contentVN : contentEN;

//     return (
//         <div className="row">
//             <div className="col-md-12">
//                 <div className="card mb-4">
//                     <div className="card-body">
//                         <h1 className="card-title"><strong>{title}</strong></h1>
//                         <div>
//                             <small>{tacgia} | </small>
//                             <small>{new Date(createdAt).toLocaleString()}</small>
//                         </div>
//                         <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-12">
//                 <CommentSection tintucId={tintuc._id} />
//                 <div className="comments mt-4">
//                     <h4>Bình luận:</h4>
//                     {comments.length > 0 ? (
//                         comments.filter(comment => comment.trangthai === 1).map(comment => (
//                             <div key={comment._id} className="comment">
//                                 <p>{comment.content}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p>Chưa có bình luận.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TinTucDetail;
// 'use client';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function TinTucDetail({ tintuc, language }) {
//   const [comments, setComments] = useState([]);
//   const [name, setName] = useState('');
//   const [content, setContent] = useState('');
//   const [pendingMessage, setPendingMessage] = useState('');
//   const [page, setPage] = useState(1);
//   const [totalComments, setTotalComments] = useState(0);
//   const limit = 5;

//   if (!tintuc) {
//     return <div>Đang tải...</div>;
//   }

//   const { titleVN, titleEN, describeVN, describeEN, contentVN, contentEN, image, tacgia, createdAt } = tintuc;
//   const title = language === 'vi' ? titleVN : titleEN;
//   const description = language === 'vi' ? describeVN : describeEN;
//   const articleContent = language === 'vi' ? contentVN : contentEN;

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/comments', {
//         ten: name,
//         noidung: content,
//         tintucId: tintuc._id,
//       });
//       setPendingMessage('Bình luận của bạn đang chờ phê duyệt.');
//       setName('');
//       setContent('');
//       fetchComments(); 
//     } catch (error) {
//       console.error('Error submitting comment:', error);
//     }
//   };
  
//   const fetchComments = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/comments?tintucId=${tintuc._id}`, {
//         params: { tintucId: tintuc._id, page, limit }
//       });
//       setComments(response.data.comments);
//       setTotalComments(response.data.totalComments);
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//   }, [page]);

//   const totalPages = Math.ceil(totalComments / limit);

//   return (
//     <div className="row">
//       <div className="col-md-12">
//         <div className="card mb-4">
//           <div className="card-body">
//             <h1 className="card-title"><strong>{title}</strong></h1>
//             <div>
//               <small>{tacgia} | </small>
//               <small>{new Date(createdAt).toLocaleString()}</small>
//             </div>
//             <div className="content" dangerouslySetInnerHTML={{ __html: articleContent }}></div>
//           </div>
//         </div>
//         <div className="card mb-4">
//           <div className="card-body">
//             <h2>Để lại bình luận</h2>
//             <form onSubmit={handleCommentSubmit}>
//               <div className="form-group">
//                 <label>Tên:</label>
//                 <input 
//                   type="text" 
//                   className="form-control" 
//                   value={name} 
//                   onChange={(e) => setName(e.target.value)} 
//                   required 
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Nội dung:</label>
//                 <textarea 
//                   className="form-control" 
//                   value={content} 
//                   onChange={(e) => setContent(e.target.value)} 
//                   required 
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">Gửi</button>
//             </form>
//             {pendingMessage && <p>{pendingMessage}</p>}
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-body">
//             <h2>Bình luận</h2>
//             {comments.length > 0 ? (
//               comments.filter(comment => comment.trangthai === 1).map(comment => (
//                 <div key={comment._id} className="comment">
//                   <p><strong>{comment.ten}</strong></p>
//                   <p>{comment.noidung}</p>
//                 </div>
//               ))
//             ) : (
//               <p>Chưa có bình luận nào.</p>
//             )}
//           </div>
//           <div className="card-footer">
//             {page > 1 && (
//               <button className="btn btn-secondary" onClick={() => setPage(page - 1)}>
//                 Trang trước
//               </button>
//             )}
//             {page < totalPages && (
//               <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>
//                 Trang sau
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TinTucDetail;
// 'use client';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Link from 'next/link';

// function TinTucDetail({ tintuc, language }) {
//   const [comments, setComments] = useState([]);
//   const [name, setName] = useState('');
//   const [content, setContent] = useState('');
//   const [pendingMessage, setPendingMessage] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalComments, setTotalComments] = useState(0);
//   const commentsPerPage = 5;

//   if (!tintuc) {
//     return <div>Đang tải...</div>;
//   }

//   const { titleVN, titleEN, describeVN, describeEN, contentVN, contentEN, image, tacgia, createdAt } = tintuc;
//   const title = language === 'vi' ? titleVN : titleEN;
//   const description = language === 'vi' ? describeVN : describeEN;
//   const articleContent = language === 'vi' ? contentVN : contentEN;

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/comments', {
//         ten: name,
//         noidung: content,
//         tintucId: tintuc._id,
//       });
//       setPendingMessage('Bình luận của bạn đang chờ phê duyệt.');
//       setName('');
//       setContent('');
//       fetchComments(); 
//     } catch (error) {
//       console.error('Error submitting comment:', error);
//     }
//   };

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/comments?tintucId=${tintuc._id}`, {
//         params: { tintucId: tintuc._id, page: currentPage, limit: commentsPerPage }
//       });
//       setComments(response.data.comments);
//       setTotalComments(response.data.totalComments);
//     } catch (error) {
//       console.error('Error fetching comments:', error);
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//   }, [currentPage]);

//   const totalPages = Math.ceil(totalComments / commentsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const getPageNumbers = () => {
//     const pageNumbers = [];
//     const maxPageButtons = 5;

//     if (totalPages <= maxPageButtons) {
//       for (let i = 1; i <= totalPages; i++) {
//         pageNumbers.push(i);
//       }
//     } else {
//       let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
//       let endPage = startPage + maxPageButtons - 1;

//       if (endPage > totalPages) {
//         endPage = totalPages;
//         startPage = endPage - maxPageButtons + 1;
//       }

//       for (let i = startPage; i <= endPage; i++) {
//         pageNumbers.push(i);
//       }
//     }

//     return pageNumbers;
//   };

//   return (
//     <div className="row">
//       <div className="col-md-12">
//         <div className="card mb-4">
//           <div className="card-body">
//             <h1 className="card-title"><strong>{title}</strong></h1>
//             <div>
//               <small>{tacgia} | </small>
//               <small>{new Date(createdAt).toLocaleString()}</small>
//             </div>
//             <div className="content" dangerouslySetInnerHTML={{ __html: articleContent }}></div>
//           </div>
//         </div>
//         <div className="card mb-4">
//           <div className="card-body">
//             <h2>Để lại bình luận</h2>
//             <form onSubmit={handleCommentSubmit}>
//               <div className="form-group">
//                 <label>Tên:</label>
//                 <input 
//                   type="text" 
//                   className="form-control" 
//                   value={name} 
//                   onChange={(e) => setName(e.target.value)} 
//                   required 
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Nội dung:</label>
//                 <textarea 
//                   className="form-control" 
//                   value={content} 
//                   onChange={(e) => setContent(e.target.value)} 
//                   required 
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">Gửi</button>
//             </form>
//             {pendingMessage && <p>{pendingMessage}</p>}
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-body">
//             <h2>Bình luận</h2>
//             {comments.length > 0 ? (
//               comments.filter(comment => comment.trangthai === 1).map(comment => (
//                 <div key={comment._id} className="comment card mb-2 border-primary">
//                   <div className="card-body">
//                     <p><strong>Tên:</strong> {comment.ten}</p>
//                     <p><strong>Nội dung:</strong> {comment.noidung}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>Chưa có bình luận nào.</p>
//             )}
//           </div>
//           <div className="card-footer">
//             {totalPages > 1 && (
//               <nav className='container' aria-label="Pagination">
//                 <ul className="pagination pagination-sm justify-content-center">
//                   <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                     <a onClick={() => paginate(currentPage - 1)} className="page-link"><span aria-hidden="true">&laquo;</span></a>
//                   </li>
//                   {getPageNumbers().map((number) => (
//                     <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
//                       <a onClick={() => paginate(number)} className="page-link">{number}</a>
//                     </li>
//                   ))}
//                   <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                     <a onClick={() => paginate(currentPage + 1)} className="page-link"><span aria-hidden="true">&raquo;</span></a>
//                   </li>
//                 </ul>
//               </nav>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TinTucDetail;
'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TinTucDetail({ tintuc, language }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [pendingMessage, setPendingMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalComments, setTotalComments] = useState(0);
  const [user, setUser] = useState(null);
  const commentsPerPage = 5;

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userObject = JSON.parse(savedUser);
        if (userObject && userObject.name) {
          setUser(userObject);
        }
      } catch (e) {
        console.error('Error parsing user from localStorage', e);
        localStorage.removeItem('user');
      }
    }
  }, []);

  if (!tintuc) {
    return <div>Đang tải...</div>;
  }

  const { titleVN, titleEN, describeVN, describeEN, contentVN, contentEN, image, tacgia, createdAt } = tintuc;
  const title = language === 'vi' ? titleVN : titleEN;
  const description = language === 'vi' ? describeVN : describeEN;
  const articleContent = language === 'vi' ? contentVN : contentEN;

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Bạn cần đăng nhập để bình luận.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/comments', {
        ten: name,
        noidung: content,
        tintucId: tintuc._id,
        userId: user._id,
      });
      toast.success('Bình luận của bạn đang chờ phê duyệt.');
      setName('');
      setContent('');
      fetchComments();
    } catch (error) {
      toast.error('Error submitting comment:', error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/comments?tintucId=${tintuc._id}`, {
        params: { tintucId: tintuc._id, page: currentPage, limit: commentsPerPage }
      });
      setComments(response.data.comments);
      setTotalComments(response.data.totalComments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [currentPage]);

  const totalPages = Math.ceil(totalComments / commentsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
      let endPage = startPage + maxPageButtons - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxPageButtons + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="row">
      <ToastContainer />
      <div className="col-md-12">
        <div className="card mb-4">
          <div className="card-body">
            <h1 className="card-title"><strong>{title}</strong></h1>
            <div>
              <small>{tacgia} | </small>
              <small>{new Date(createdAt).toLocaleString()}</small>
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: articleContent }}></div>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <h2>Để lại bình luận</h2>
            <form onSubmit={handleCommentSubmit}>
              <div className="form-group">
                <label>Tên:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Nội dung:</label>
                <textarea 
                  className="form-control" 
                  value={content} 
                  onChange={(e) => setContent(e.target.value)} 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Gửi</button>
            </form>
            {pendingMessage && <p>{pendingMessage}</p>}
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h2>Bình luận</h2>
            {comments.length > 0 ? (
              comments.filter(comment => comment.trangthai === 1).map(comment => (
                <div key={comment._id} className="comment card mb-2 border-primary">
                  <div className="card-body">
                    <p><strong>Tên:</strong> {comment.ten}</p>
                    <p><strong>Nội dung:</strong> {comment.noidung}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Chưa có bình luận nào.</p>
            )}
          </div>
          <div className="card-footer">
            {totalPages > 1 && (
              <nav className='container' aria-label="Pagination">
                <ul className="pagination pagination-sm justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(currentPage - 1)} className="page-link"><span aria-hidden="true">&laquo;</span></a>
                  </li>
                  {getPageNumbers().map((number) => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                      <a onClick={() => paginate(number)} className="page-link">{number}</a>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a onClick={() => paginate(currentPage + 1)} className="page-link"><span aria-hidden="true">&raquo;</span></a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TinTucDetail;
