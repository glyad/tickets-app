"use client";

import { AgGridReact } from "ag-grid-react";
import styles from "./page.module.css";
import { useAppStore } from "./state/app-state";
import { AllCommunityModule, ColDef, ModuleRegistry, SelectEditorModule } from 'ag-grid-community'; 

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule, SelectEditorModule]);

export default function Home() {
  const state = useAppStore((state) => state);
  
  const colDefs: ColDef[] = [
    { field: 'title', headerName: 'Title', sortable: true, filter: true, flex: 2 },
    {
      field: 'priority',
      headerName: 'Priority',
      editable: true,
      sortable: true,
      filter: true,
      cellEditor: 'agSelectCellEditor',
      valueFormatter: (params) => params.value.label,
      cellEditorParams: {
          values: state.priorities
      },
      enableCellChangeFlash: true,
    }
  ]; 
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ width: '1000px', height: 500 }}>
          <AgGridReact
            rowData={state.tickets}
            columnDefs={colDefs}
        />
        </div>

        <div><pre>{JSON.stringify(state.tickets, null, 2)}</pre></div>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
