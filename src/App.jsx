
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";
import Exercise4 from "./pages/Exercise4";
import Exercise5 from "./pages/Exercise5";
import Exercise6 from "./pages/Exercise6";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Exercise1 />} />
                <Route path="/exercise-2" element={<Exercise2 />} />
                <Route path="/exercise-3" element={<Exercise3 />} />
                <Route path="/exercise-4" element={<Exercise4 />} />
                <Route path="/exercise-5" element={<Exercise5 />} />
                <Route path="/exercise-6" element={<Exercise6 />} />
            </Routes>
        </BrowserRouter>
    );
}
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([])
  const [load, setLoad] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [numPosts, setNumPosts] = useState(25)
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=${numPosts}&skip=${(currentPage - 1)* numPosts}`)
    .then(res => res.json())
    .then(data => {
      setLoad(false)
      if (search.length >3) {
        data = data.posts.filter(item => item.title.toLowerCase().includes(search))
        setPosts(data)
        setTotalPage(Math.ceil(data.length/numPosts))
      } else {
      setPosts(data.posts)
      setTotalPage(Math.ceil(data.total/numPosts))
      }
    })
  }, [currentPage, numPosts, search])
  return (
    
    <div className="app">
      <h1>Danh sách bài viết</h1>
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Tìm kiếm bài viết..."
          onInput={(event) => {
            setSearch(event.currentTarget.value.trim().toLowerCase())
          }}
        />
      </div>

      {/* Loading Overlay */}
      {load?<div className="loading-overlay">
        <div className="loading-spinner"></div>
        <p>Đang tải dữ liệu...</p>
      </div>:null}

      {/* No Results Message */}
      {!posts.length?<p className="no-results">Không tìm thấy bài viết nào.</p>:null}

      {/* List of Posts */}
      <ul className="post-list">
        {posts.map(item => (
        <li className="post-item" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>

          <div className="post-meta">
            <span className="views">👀 {item.views} lượt xem</span>
            <span className="likes">👍 {item.reactions.likes}</span>
            <span className="dislikes">👎 {item.reactions.dislikes}</span>
          </div>

          <div className="tags">
            {item.tags.map((tag, index)=> (<span className="tag" key={index}>{tag}</span>))}
          </div>
        </li>))}
      </ul>

      {/* Pagination */}
      {!search?<div className="pagination-container">
        <div className="records-per-page">
          <label htmlFor="records">Hiển thị:</label>
          <select id="records" className="records-select" onChange={(event) => {
            setCurrentPage(1)
            setNumPosts(Number(event.currentTarget.value))}}>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
        </div>
        <div className="pagination">
          <button className="page-btn prev" onClick={() => setCurrentPage(currentPage-1)}>« Trước</button>
          {Array(totalPage).fill(6).slice(0, 5).map((item, index) => (<button className={index===0?"page-btn active":"page-btn"} key={currentPage+index} onClick={() => setCurrentPage(currentPage+index)}>{currentPage+index}</button>))}
          <button className="page-btn next" onClick={() =>
            setCurrentPage(currentPage+1)
          }>Sau »</button>
        </div>
      </div>:null}
    </div>
  );
}

export default App;
