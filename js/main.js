'use strict';

{
  // 数字を生成
  function createColumn(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }

  // spliceでランダムに数字を取り出す
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }

    return column;
  }

  // 生成された数字を配列に格納
  function createColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }

  // 行と列を逆転させる
  // function createBingo(columns) {
  //   const bingo = [];
  //   for (row = 0; row < 5; row++) {
  //     bingo[row] = [];
  //     for (col = 0; col < 5; col++) {
  //       bingo[row][col] = columns[col][row];
  //     }
  //   }
  //   return bingo;
  // }
  
  // ページに反映
  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  const columns = createColumns();
  renderBingo(columns);
}