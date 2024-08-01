import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentSection = ({ tintucId }) => {
    const [content, setContent] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (content.trim() === '' || name.trim() === '') {
            toast.error('Họ và tên và bình luận không được để trống.');
            return;
        }
        try {
            await axios.post('http://localhost:3000/comments/add', {
                tintucId,
                name,
                content,
                trangthai: 0
            });
            toast.success('Bình luận của bạn đã được gửi đi và sẽ được phê duyệt sớm.');
            setContent('');
            setName('');
        } catch (error) {
            console.error('Lỗi gửi bình luận:', error);
            const errorMessage = error.response?.data?.message || 'Đã xảy ra lỗi khi gửi bình luận.';
            toast.error(errorMessage);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Họ và tên"
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="form-control"
                        rows="4"
                        placeholder="Viết bình luận của bạn..."
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Gửi bình luận</button>
            </form>
        </div>
    );
};

export default CommentSection;
