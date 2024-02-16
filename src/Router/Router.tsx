import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout/DefaultLayout'
import ChessBoard from '../pages/Chessboard/ChessBoard'
import DrawShapes from '../pages/DrawShapes/DrawShapes'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<DefaultLayout />}>
            <Route path='/drawshapes' element={<DrawShapes/>} />
            <Route path='/chessboard' element={<ChessBoard/>} />
        </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;