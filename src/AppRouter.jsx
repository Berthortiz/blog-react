import { BrowserRouter, Navigate, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Post from "./pages/Post";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes  >
        <Route path="/home" element={<HomePage></HomePage>} ></Route>
        <Route path="/" element={<Navigate to="/home" ></Navigate>} ></Route>
        <Route path="/post/:slug" element={<Post></Post>}></Route>

      </Routes >



    </BrowserRouter>
  )
}