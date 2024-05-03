import React, { useState, useEffect } from "react";
import Header from "../components/header";
import DataTable from "react-data-table-component";

const Receive = () => {
    const [students, setStudents] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/students');
                const json = await response.json();

                if (response.ok) {
                    setStudents(json);
                } else {
                    throw new Error('Failed to fetch students');
                }
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        fetchUsers();
    }, []);

    const columns = [
        {
            name: 'ID Number',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Last Name',
            selector: row => row.lname,
            sortable: true
        },
        {
            name: 'First Name',
            selector: row => row.fname,
            sortable: true
        },
        {
            name: 'Gender',
            selector: row => row.gender,
            sortable: true
        },
        {
            name: 'Year Level',
            selector: row => row.level,
            sortable: true
        },
        {
            name: 'User Type',
            selector: row => row.usertype,
            sortable: true
        },
        {
            name: 'Payable',
            selector: row => row.payable,
            sortable: true
        }
    ];

    return (
        <div>
            <Header />
            <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Receive</h1>
            <div className="flex justify-center mt-10 h-screen">
                {students ? (
                    <DataTable
                        columns={columns}
                        data={students}
                        selectableRows
                        fixedHeader
                        className=""
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Receive;
