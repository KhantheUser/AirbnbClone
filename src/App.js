
import { BrowserRouter,Routes , Route,Navigate } from 'react-router-dom';
import 'animate.css';
import BackToTop from './Components/BackToTop/BackToTop';
import './i18n';

// import { Map } from './Components/Map'
import { createBrowserHistory } from "history";

import {lazy, Suspense} from 'react'

// import QuanLiNguoiDung from './Templates/AdminTemplate/QuanLiNguoiDung/QuanLiNguoiDung';
// import ChinhSuaNguoiDung from './Templates/AdminTemplate/QuanLiNguoiDung/ChinhSuaNguoiDung/ChinhSuaNguoiDung';
// import ThemPhongNghi from './Templates/AdminTemplate/QuanLiPhong/ThemPhongNghi/ThemPhongNghi'

// import QuanLiPhong from './Templates/AdminTemplate/QuanLiPhong/QuanLiPhong';
const QuanLiNguoiDung = lazy(()=>import('./Templates/AdminTemplate/QuanLiNguoiDung/QuanLiNguoiDung'))
const ChinhSuaNguoiDung = lazy(()=>import('./Templates/AdminTemplate/QuanLiNguoiDung/ChinhSuaNguoiDung/ChinhSuaNguoiDung'))
const ThemPhongNghi = lazy(()=>import('./Templates/AdminTemplate/QuanLiPhong/ThemPhongNghi/ThemPhongNghi'))
const QuanLiPhong = lazy(()=>import('./Templates/AdminTemplate/QuanLiPhong/QuanLiPhong'))
const ChinhSuaPhong = lazy(()=>import('./Templates/AdminTemplate/QuanLiPhong/ChinhSuaPhong/ChinhSuaPhong'))
const QuanLiViTri = lazy(()=>import('./Templates/AdminTemplate/QuanLiViTri/QuanLiViTri'))
const ChinhSuaViTri = lazy(()=>import('./Templates/AdminTemplate/QuanLiViTri/ChinhSuaViTri/ChinhSuaViTri'))
const HomeTemplate = lazy(()=>import('./Templates/HomeTemplate/HomeTemplate'));
const Home = lazy(()=>import('./Pages/Home/Home'));
const RoomTemplate = lazy(()=>import('./Templates/RoomTemplate/RoomTemplate'));
const RoomList = lazy(()=>import('./Pages/RoomList/RoomList'));
const RoomDetail = lazy(()=>import('./Pages/RoomDetails/RoomDetail'));
const Login = lazy(()=>import('./Pages/Login/Login'));
const History = lazy(()=>import('./Pages/History/History'));
const Profile = lazy(()=>import('./Pages/Profile/Profile'));
const Register = lazy(()=>import('./Pages/Register/Register'));
const AdminTemplate = lazy(()=>import('./Templates/AdminTemplate/AdminTemplate'));
const ThemQuanTri = lazy(()=>import('./Templates/AdminTemplate/QuanLiNguoiDung/ThemQuanTri/ThemQuanTri'));
const ThemViTri = lazy(()=>import('./Templates/AdminTemplate/QuanLiViTri/ThemViTri/ThemViTri'));
export const history = createBrowserHistory();



function App() {
  
  return (
  
    <div className="App ">
    <Suspense fallback={<div style={{width:'100%',height:'100vh',backgroundImage:'url("https://img.wattpad.com/2a0398b803517691323753460ac40d5f4d8960d0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f554e4e6966786a325458565079773d3d2d3839383632313534372e313631356236353736386431303038653736363331343031323137392e676966")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

    </div>}>
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile/>}/>
            <Route path="rooms" element={<RoomTemplate/>}>
              
              <Route index element={<RoomList/> }/>
              <Route path="details/:id" element={<RoomDetail/> }/>
            </Route>
            <Route path="*" element={<Navigate to="/"/>} />
           

           
          </Route>
          <Route path="history" element={<History/>}/>
               <Route path="login" element={<Login/>}/>
               <Route path="register" element={<Register/>}/>

           <Route path="/admin" element={<AdminTemplate/>}>
             <Route  path="user" element={<QuanLiNguoiDung/>}/>
             <Route path="location/add-location" element={<ThemViTri/>}/>
             <Route path='user/add-admin' element={<ThemQuanTri/>}/>
             <Route path="user/edit-admin/:id" element={<ChinhSuaNguoiDung/>}/>
             <Route  path="location" element={<QuanLiViTri/>}/>
             <Route path="location/edit-location/:id" element={<ChinhSuaViTri/>}/>
             <Route path="room-manage" element={<QuanLiPhong/>}>
                
             </Route>
             <Route path="room-manage/add-room/:id" element={<ThemPhongNghi/>}/>
             <Route path="room-manage/edit-room/:id" element={<ChinhSuaPhong/>}/>
           </Route>    
            </Routes>
        </BrowserRouter>
        </Suspense>

        <BackToTop/>
    </div>
  
  );
}

export default App;
