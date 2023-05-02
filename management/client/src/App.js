import './App.css';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TablePage from './TablePage';
import CustomerPage from './CustomerPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="black-nav">
          <Link to="/">
            <h4>고객 관리 시스템</h4>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<div className="App">
            <Button variant="outlined" component={Link} to="/table">
              테이블
            </Button>
            <Button variant="outlined" component={Link} to="/customer">
              고객관리
            </Button>
            <Button variant="outlined">승점</Button>
            <Button variant="outlined">비고</Button>
          </div>} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/customer" element={<CustomerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
