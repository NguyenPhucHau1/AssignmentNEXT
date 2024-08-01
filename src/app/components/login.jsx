import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../../redux/slices/userSlice';
import userService from './usersv';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
  
    try {
      const response = await userService.login(formData.email, formData.password);
      dispatch(loginSuccess(response.data));
  
      if (response.data.result.trangthai === 1) {
        toast.success('Đăng nhập thành công!');
        localStorage.setItem('user', JSON.stringify(response.data.result)); // Lưu thông tin đăng nhập
        window.location.href = '/'; 
      } else {
        toast.success('Đăng nhập thành công!');
        localStorage.setItem('user', JSON.stringify(response.data.result)); 
        window.location.href = '/'; 
      }
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || error.message));
      toast.error('Đăng nhập thất bại!');
      console.error('Đăng nhập thất bại:', error);
    }
  };

  return (
    <div className="container col-5 mt-5">
      <ToastContainer />
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mật khẩu</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className='mb-3'>
          <Link href="/register">Đăng ký</Link>
        </div>
        <button type="submit" className="btn btn-primary">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
