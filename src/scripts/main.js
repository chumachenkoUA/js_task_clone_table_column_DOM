'use strict';

const table = document.querySelector('table');
const tHeadRows = table.tHead ? [...table.tHead.rows] : [];
const firstTBody = table.tBodies.length ? table.tBodies[0] : null;
const tBodyRows = firstTBody ? [...firstTBody.rows] : [];
const tFootRows = table.tFoot ? [...table.tFoot.rows] : [];

const newColumn = (tEntity) => {
  tEntity.forEach((row) => {
    const sourceCell = row.cells[1];

    if (!sourceCell) {
      return;
    }

    const newCell = sourceCell.cloneNode(true);
    const refCell = row.cells[row.cells.length - 1];

    if (refCell) {
      row.insertBefore(newCell, refCell);
    }
  });
};

newColumn(tHeadRows);
newColumn(tBodyRows);
newColumn(tFootRows);
