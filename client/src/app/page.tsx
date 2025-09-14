/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { AgGridReact } from "ag-grid-react";
import styles from "./page.module.css";
import { useAppStore } from "./state/app-state";
import { Assignee, Priority, Status, Ticket } from "./model";
import { AllCommunityModule, GridReadyEvent, ModuleRegistry, RowSelectionOptions, SelectEditorModule, SideBarDef } from 'ag-grid-community'; 
import { ActionButtonRenderer } from "./action-button-renderer";
import {
  AllEnterpriseModule,
  ColumnMenuModule,
  ColumnsToolPanelModule,
  ContextMenuModule,
  FiltersToolPanelModule,
  LicenseManager,
  SetFilterModule,
  ValidationModule
} from "ag-grid-enterprise";
import { useCallback, useMemo, useRef, useState } from "react";

ModuleRegistry.registerModules([
  AllCommunityModule, 
  AllEnterpriseModule, 
  SelectEditorModule,
  SetFilterModule, 
  ColumnMenuModule, 
  ColumnsToolPanelModule, 
  ContextMenuModule, 
  FiltersToolPanelModule,
  ValidationModule
]);

LicenseManager.setLicenseKey("[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-094359}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{14 October 2025}____[v3]_[0102]_MTc2MDM5NjQwMDAwMA==beb8d54a4d6491a36d345e03edef69f5");


export default function Home() {
  const gridRef = useRef<AgGridReact<Ticket>>(null);
  const onGridReady = useCallback((params: GridReadyEvent) => {
    params.api.closeToolPanel();
  }, []);
  
  const state = useAppStore((state) => state);
  
  const rowSelection: RowSelectionOptions = {
    mode: 'singleRow'
  };
  
  const [columnDefs] = useState([
    { field: 'title', headerName: 'Title', sortable: true, filter: "agTextColumnFilter", flex: 2 }, {
      field: 'status',
      headerName: 'Status',
      editable: true,
      sortable: true,
      filter: "agSetColumnFilter",
      filterParams: {
        applyMiniFilterWhileTyping: true,
      },
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
          values: state.statuses
      },
      valueFormatter: (params: { value: Status }) => params.value.label,
      enableCellChangeFlash: true,
    }, {
      field: 'priority',
      headerName: 'Priority',
      editable: true,
      sortable: true,
      filter: "agSetColumnFilter",
      filterParams: {
        applyMiniFilterWhileTyping: true
      },
      cellEditor: 'agSelectCellEditor',
      valueFormatter: (params: { value: Priority }) => params.value.label,
      cellEditorParams: {
          values: state.priorities
      },
      enableCellChangeFlash: true,
    }, {
      field: 'assignedTo',
      headerName: 'Assignee',
      editable: true,
      sortable: true,
      filter: "agSetColumnFilter",
      filterParams: {
        applyMiniFilterWhileTyping: true
      },
      cellEditor: 'agSelectCellEditor',
      valueFormatter: (params: { value: Assignee }) => params.value.label,
      cellEditorParams: {
          values: state.assignees,
          useFormatter: true
      },
      enableCellChangeFlash: true,
    }, {      
      headerName: 'Actions',
      cellRenderer: ActionButtonRenderer      
    }
  ]); 

  const sideBar: SideBarDef = useMemo(() => { 
    return {
      toolPanels: [
        {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel',
          minWidth: 180,
          maxWidth: 400,
          width: 250
        }
      ],
      defaultToolPanel: 'filters',
      
   };
      },
    []);
  
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ width: '1100px', height: 600 }}>
          <AgGridReact
            ref={gridRef}
            rowData={state.tickets}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={20}
            rowSelection={rowSelection}
            sideBar={sideBar}      
            onGridReady={onGridReady}      
        />
        </div>

        
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
