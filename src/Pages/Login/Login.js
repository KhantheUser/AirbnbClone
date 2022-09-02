import React from 'react'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {string,object} from 'yup';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import './Login.scss'
import { postDangNhap } from '../../Slices/userAuthSlice';



export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
 const schema = object({
    email: string().required('Tài khoản không được để trống'),
    password: string().required('Mật khẩu không được để trống')

  })
 const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
    mode : 'onTouched'
  });
  
  
  return (
  <form onSubmit={handleSubmit((thongTinDangNhap)=>dispatch(postDangNhap(thongTinDangNhap)))} className="cont">
  <div  className="demo">
    <div className="login">
      <div className="login__check" />
      <div className="login__form">
        <div className="login__row">
          <svg className="login__icon name svg-icon" viewBox="0 0 20 20">
            <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
          </svg>
          <input type="email"  {...register('email')} className="login__input name" placeholder="Username" />
              {errors.email && <p className="text-red-500 text-md italic  text-left mt-2">{errors.email.message}</p>}
        
        </div>
        <div className="login__row">
          <svg className="login__icon pass svg-icon" viewBox="0 0 20 20">
            <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
          </svg>
          <input type="password"  {...register('password')} className="login__input pass" placeholder="Password" />
              {errors.password && <p className="text-red-500 text-md italic text-left mt-2">{errors.password.message}</p>}

        </div>
        <button  type="submit" className="login__submit">Sign in</button>
        <p className="login__signup">Don't have an account? &nbsp;<a onClick={()=>navigate('/register')}>Sign up</a></p>
      </div>
    </div>
   
  </div>
</form>

  )
}
