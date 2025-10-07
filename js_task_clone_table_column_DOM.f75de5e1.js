'use strict';
const table = document.querySelector('table');
const tHeadRows = table.tHead ? [
    ...table.tHead.rows
] : [];
const tBodyRows = [
    ...table.tBodies
].reduce((rows, tBody)=>{
    rows.push(...tBody.rows);
    return rows;
}, []);
const tFootRows = table.tFoot ? [
    ...table.tFoot.rows
] : [];
const newColumn = (tEntity)=>{
    tEntity.forEach((row)=>{
        const sourceCell = row.cells[1];
        if (!sourceCell) return;
        const newCell = sourceCell.cloneNode(true);
        const refCell = row.cells[row.cells.length - 1];
        if (refCell) row.insertBefore(newCell, refCell);
    });
};
newColumn(tHeadRows);
newColumn(tBodyRows);
newColumn(tFootRows);

//# sourceMappingURL=js_task_clone_table_column_DOM.f75de5e1.js.map
