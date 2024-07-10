var isValidSudoku= function(board){
    const seen=new Set();
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            const curr=board[i][j];
            if(curr!='.'){
                const rowVal='row ${i} ${curr}';
                const colVal='col ${j} ${curr}';
                const boxVal='box ${Math.floor(i/3)}- ${Math.floor(j/3)}  ${curr}';
                if(seen.has(rowVal) || seen.has(colVal)|| seen.has(box.val)){
                    return false;
                }
                seen.add(rowVal);
                seen.add(colVal);
                seen.add(boxVal);
            }
        }
    }
    return true;
};