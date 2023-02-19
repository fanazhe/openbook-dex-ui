import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,body{
  background: #11161D;
}
input[type=number]::-webkit-inner-spin-button {
  opacity: 0;
}
input[type=number]:hover::-webkit-inner-spin-button,
input[type=number]:focus::-webkit-inner-spin-button {
  opacity: 0.25;
}
/* width */
::-webkit-scrollbar {
  width: 15px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #93a1a1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #657b83;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #586e75;
}
.ant-slider-track, .ant-slider:hover .ant-slider-track {
  background-color: #2abdd2;
  opacity: 0.75;
}
.ant-slider-track,
.ant-slider ant-slider-track:hover {
  background-color: #2abdd2;
  opacity: 0.75;
}
.ant-slider-dot-active,
.ant-slider-handle,
.ant-slider-handle-click-focused,
.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {
  border: 2px solid #2abdd2; 
}
.ant-table-tbody > tr.ant-table-row:hover > td {
  background: #839496;
}
.ant-table-tbody > tr > td {
  border-bottom: 8px solid #93a1a1;
}
.ant-table-thead th.ant-table-column-has-sorters:hover {
  background: #839496;
}
.ant-table-tbody > tr.ant-table-placeholder:hover > td {
  background: #839496;
}
.ant-table-container table > thead > tr:first-child th {
  border-bottom: none;
}
.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {
  border-top: 1px solid #434a59 !important;
}
.ant-layout {
    background: #fdf6e3;
  }
  .ant-table {
    background: #657b83;
  }
  .ant-table-thead > tr > th {
    background: #93a1a1;
  }
.ant-select-item-option-content {
  img {
    margin-right: 4px;
  }
}
.ant-modal-content {
  background-color: #fdf6e3;
}
.ant-layout-footer {
  background-color: #eee8d5;
}
.ant-menu-horizontal > .ant-menu-item::after, .ant-menu-horizontal > .ant-menu-submenu::after {
  left: 0;
  right: 0;
}

@-webkit-keyframes highlight {
  from { background-color: #2abdd2;}
  to {background-color: #93a1a1;}
}
@-moz-keyframes highlight {
  from { background-color: #2abdd2;}
  to {background-color: #93a1a1;}
}
@-keyframes highlight {
  from { background-color: #2abdd2;}
  to {background-color: #93a1a1;}
}
.flash {
  -moz-animation: highlight 0.1s ease 0s 1 alternate ;
  -webkit-animation: highlight 0.1s ease 0s 1 alternate;
  animation: highlight 0.1s ease 0s 1 alternate;
}`;
