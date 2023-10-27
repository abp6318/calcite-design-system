/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{r as e,c as t,h as i,H as s,a as l}from"./p-a2b8d6f6.js";import{l as a}from"./p-d2216e3b.js";import{i as o}from"./p-6294fd29.js";import{c as n,u as c,d as r}from"./p-2e1b2031.js";import{g as h}from"./p-90c940c9.js";import"./p-9c138760.js";import"./p-f8ee0d71.js";import"./p-3f10228f.js";const d=class{constructor(i){e(this,i),this.calciteTableRowSelect=t(this,"calciteTableRowSelect",6),this.calciteInternalTableRowFocusRequest=t(this,"calciteInternalTableRowFocusRequest",6),this.rowCells=[],this.emitTableRowFocusRequest=(e,t,i,s)=>{this.calciteInternalTableRowFocusRequest.emit({cellPosition:e,rowPosition:t,destination:i,lastCell:s})},this.updateCells=()=>{const e=this.tableRowSlotEl?.assignedElements({flatten:!0})?.filter((e=>e.matches("calcite-table-cell")||e.matches("calcite-table-header"))),t=Array.from(this.tableRowEl?.querySelectorAll("calcite-table-header, calcite-table-cell"))?.filter((e=>e.numberCell||e.selectionCell)),i=t?t.concat(e):e;i.length>0&&i?.forEach(((e,t)=>{e.positionInRow=t+1,e.parentRowType=this.rowType,e.scale=this.scale,"CALCITE-TABLE-CELL"===e.nodeName&&(e.readCellContentsToAT=this.readCellContentsToAT,e.disabled=this.disabled,e.parentRowIsSelected=this.selected)})),this.rowCells=i||[],this.cellCount=i?.length},this.handleSelectionOfRow=()=>{this.calciteTableRowSelect.emit()},this.handleKeyboardSelection=e=>{o(e.key)&&(" "===e.key&&e.preventDefault(),this.handleSelectionOfRow())},this.disabled=!1,this.selected=!1,this.cellCount=void 0,this.rowType=void 0,this.numbered=!1,this.positionSection=void 0,this.positionSectionLocalized=void 0,this.positionAll=void 0,this.readCellContentsToAT=void 0,this.scale=void 0,this.selectionMode="none",this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.bodyRowCount=void 0,this.effectiveLocale=""}handleCellChanges(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}handleDelayedCellChanges(){this.tableRowEl&&this.rowCells.length>0&&requestAnimationFrame((()=>this.updateCells()))}componentDidLoad(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}connectedCallback(){n(this)}componentDidRender(){c(this)}disconnectedCallback(){r(this)}calciteInternalTableRowFocusChangeHandler(e){if(e.target.contains(this.el)){const t=e.detail.cellPosition,i=e.detail.destination,s=e.detail.lastCell;if(e.detail.rowPosition===this.positionAll){if(this.disabled)return void this.emitTableRowFocusRequest(t,this.positionAll,"last"===i?"previous":"first"===i?"next":i);const e=s?this.rowCells[this.rowCells.length-1]:this.rowCells?.find(((e,i)=>i+1===t));e&&e.setFocus()}}}keyDownHandler(e){const t=e.target,i=e.key,s=e.ctrlKey,l=this.rowCells;if(t.matches("calcite-table-cell")||t.matches("calcite-table-header"))switch(i){case"ArrowUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"previous"),e.preventDefault();break;case"ArrowDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"next"),e.preventDefault();break;case"PageUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"first"),e.preventDefault();break;case"PageDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"last"),e.preventDefault();break;case"ArrowLeft":a(l,t,"previous",!1),e.preventDefault();break;case"ArrowRight":a(l,t,"next",!1),e.preventDefault();break;case"Home":s?(this.emitTableRowFocusRequest(1,this.positionAll,"first"),e.preventDefault()):(a(l,t,"first",!1),e.preventDefault());break;case"End":s?(this.emitTableRowFocusRequest(this.rowCells?.length,this.positionAll,"last",!0),e.preventDefault()):(a(l,t,"last",!1),e.preventDefault())}}renderSelectionIcon(){return i("calcite-icon",{icon:"multiple"===this.selectionMode&&this.selected?"check-square-f":"multiple"===this.selectionMode?"square":this.selected?"circle-f":"circle",scale:h(this.scale)})}renderSelectableCell(){return"head"===this.rowType?i("calcite-table-header",{alignment:"center",bodyRowCount:this.bodyRowCount,key:"selection-head",onClick:"multiple"===this.selectionMode&&this.handleSelectionOfRow,onKeyDown:"multiple"===this.selectionMode&&this.handleKeyboardSelection,selectedRowCount:this.selectedRowCount,selectedRowCountLocalized:this.selectedRowCountLocalized,selectionCell:!0,selectionMode:this.selectionMode}):"body"===this.rowType?i("calcite-table-cell",{alignment:"center",key:"selection-body",onClick:this.handleSelectionOfRow,onKeyDown:this.handleKeyboardSelection,parentRowIsSelected:this.selected,parentRowPositionLocalized:this.positionSectionLocalized,selectionCell:!0},this.renderSelectionIcon()):i("calcite-table-cell",{alignment:"center",key:"selection-foot",selectionCell:!0})}renderNumberedCell(){return"head"===this.rowType?i("calcite-table-header",{alignment:"center",key:"numbered-head",numberCell:!0}):"body"===this.rowType?i("calcite-table-cell",{alignment:"center",key:"numbered-body",numberCell:!0},this.positionSectionLocalized):i("calcite-table-cell",{alignment:"center",key:"numbered-foot",numberCell:!0})}render(){return i(s,null,i("tr",{"aria-disabled":this.disabled,"aria-rowindex":this.positionAll+1,"aria-selected":this.selected,onKeyDown:e=>this.keyDownHandler(e),ref:e=>this.tableRowEl=e},this.numbered&&this.renderNumberedCell(),"none"!==this.selectionMode&&this.renderSelectableCell(),i("slot",{onSlotchange:this.updateCells,ref:e=>this.tableRowSlotEl=e})))}get el(){return l(this)}static get watchers(){return{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}}};d.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background:var(--calcite-table-row-background, var(--calcite-ui-foreground-1));--calcite-internal-table-row-border-color:var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}";export{d as calcite_table_row}