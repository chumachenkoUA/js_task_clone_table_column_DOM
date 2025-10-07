'use stdict';

const table = document.querySelector('table');
const tHeadRows = [...table.tHead.rows];
const tBodyRows = [...table.tBodies[0].rows];
const tFootRows = [...table.tFoot.rows];

const newColumn = (tEntity) => {
  tEntity.forEach((row) => {
    const newCell = row.cells[1].cloneNode(true);

    row.insertBefore(newCell, row.lastElementChild);
  });
};

newColumn(tHeadRows);
newColumn(tBodyRows);
newColumn(tFootRows);
