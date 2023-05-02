import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

function CustomerPage() {
  const columns = [
    {
      name: "Name",
      selector: row => row.name,
      sortable: true

    },
    {
      name: "총 이용 금액",
      selector: row => row.allmoney,
      sortable: true
    },
    {
      name: "오늘 이용 금액",
      selector: row => row.todaymoney,
      sortable: true
    },
    {
      name: "바이인한 금액",
      selector: row => row.nowmoney,
      sortable: true
    }
  ];

const data = [
  {
    id: 1,
    name: 'lee',
    allmoney: '1,000,000 KRW',
    todaymoney: '200,000 KRW',
    nowmoney: '50,000 KRW'
  },
  {
    id: 2,
    name: 'han',
    allmoney: '100,000 KRW',
    todaymoney: '20,000 KRW',
    nowmoney: '10,000 KRW'
  },
  {
    id: 3,
    name: 'testuser',
    allmoney: '10,000 KRW',
    todaymoney: '2,000 KRW',
    nowmoney: '1,000 KRW'
  },
  {
    id: 4,
    name: 'yap',
    allmoney: '500,000 KRW',
    todaymoney: '300,000 KRW',
    nowmoney: '50,000 KRW'
  }
];

const [records, setRecords] = useState(data);

function handleFilter(event) {
  const newData = data.filter(row => {
    return row.name.toLowerCase().includes(event.target.value.toLowerCase())
  })
  setRecords(newData)
}

  return (
    <div className='container mt-5'>
      <div className='text-end'><input type="text" onChange={handleFilter} /></div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        fixedHeader
        pagination
      ></DataTable>
    </div>
  );
}

export default CustomerPage;
