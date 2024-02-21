import './chessboard.css';

const ChessBoard = () => {
    const rowSize: number = 8;
    const totalSquareSize: number = 64;
    const boardSizeArr: Array<number[]> = [];
    
    let tempArr = [];
    for (let i = 1; i <= totalSquareSize; i++) {
        if (i % rowSize === 0) {
            tempArr.push(i);
            console.log();
            if ((i/rowSize) % 2 === 0) {
                tempArr.reverse();
                boardSizeArr.push(tempArr);
            } else {
                boardSizeArr.push(tempArr);
            }
            tempArr = [];
        } else {
            tempArr.push(i);
        }
    }

    console.log(boardSizeArr);
    
    
    const chessboardUi = () => {
        let rows: JSX.Element[] = [];
        let row: JSX.Element[] = [];
      
        for (let i = 0; i < boardSizeArr.length; i++) {
            for (let j = 0; j < rowSize; j++) {
                const isEvenCell = (boardSizeArr[i][j]) % 2 === 0;
                const cellClass = `w-[120px] h-[120px] border flex justify-center items-center ${
                  isEvenCell ? 'even bg-black text-white' : 'odd'
                }`;
                row.push(
                    <div key={i} className={cellClass}>
                      {boardSizeArr[i][j]}
                    </div>
                  );  
            }
            rows.push(<div className="flex">{row}</div>);
            row = [];
        }
        return (
          <div className="flex flex-wrap w-100 items-center justify-center py-4">
            {rows}
          </div>
        );
      };
      

  return (
    <>
    <div className='flex flex-wrap w-100 items-center'>
    {chessboardUi()}
    </div>
    </>
  )
}

export default ChessBoard;