"use client"
import React from 'react'
import DataTable from '../table/Table';

const Cart = () => {
    const columns = [
        {
            title: "Title",
            key: "title",
            transform: (value) => <p className="">{value}</p>,
        },
        // ...(status !== STATUS?.SUSPENDED_STATUS
        //     ? [
        //         {
        //             title: "Publish/Draft",
        //             key: "is_published",
        //             transform: (value) => (
        //                 <>
        //                     {value === true ? (
        //                         <p className='bg-green-200 text-green-700 rounded-full px-3 py-1 w-fit'>{"published".toUpperCase()}</p>
        //                     ) : (
        //                         <p className='bg-yellow-200 text-black rounded-full px-3 py-1 w-fit'>{"In draft".toUpperCase()}</p>
        //                     )}
        //                 </>
        //             ),
        //         },
        //     ]
        //     : []
        // ),
        // {
        //     title: "Country",
        //     key: "region",
        //     transform: (value) => <>{value}</>,
        // },
        // {
        //     title: "Tags",
        //     key: "tags",
        //     transform: (value, row) => {
        //         const activeTags = row.tags.filter(tag => tag.status === STATUS.ACTIVE_STATUS);
        //         return <ExpandableTags tags={activeTags} />;
        //     },
        // },
        // {
        //     title: "Categories",
        //     key: "categories",
        //     transform: (value, row) => <ExpandableTags tags={row.categories} />,
        // },
        // {
        //     title: "Created Date",
        //     key: "created_at",
        //     transform: (value) => <>{formatDate(value)}</>,
        // },
        // {
        //     title: "Actions",
        //     key: "actions",
        //     transform: (value, row) => {
        //         const actions = [
        //             {
        //                 permissionKey: "Manage Articles",
        //                 actionType: "edit",
        //                 icon: <PencilSquareIcon className="w-5 h-5 mr-2" />,
        //                 actionName: "Edit",
        //                 onClick: () => {
        //                     setIsEditArticleOpen(true)
        //                     setRowId(row.id)
        //                     setEditArticleData(row.slug)
        //                 },
        //             },
        //             {
        //                 permissionKey: "Manage Articles",
        //                 actionType: "edit",
        //                 icon: <  EyeIcon className="w-5 h-5 mr-2" />,
        //                 actionName: "View",
        //                 onClick: () => {
        //                     setIsViewOpen(true)
        //                     setEditArticleData(row.slug)
        //                 },
        //             },

        //             ...(row?.status === STATUS.ACTIVE_STATUS ? [
        //                 {
        //                     permissionKey: "Manage Articles",
        //                     actionType: "archive",
        //                     icon: <NoSymbolIcon className="w-5 h-5 mr-2" />,
        //                     actionName: "Suspend",
        //                     onClick: () => {
        //                         setDeleteOpen(true)
        //                         setSelectedUser({
        //                             id: row.id,
        //                             status: STATUS.SUSPENDED_STATUS,
        //                         });
        //                     },
        //                 },
        //             ] : []),
        //             ...(row?.status === STATUS.PENDING_STATUS || row?.status === STATUS.SUSPENDED_STATUS ? [
        //                 {
        //                     permissionKey: "Manage Articles",
        //                     actionType: "archive",
        //                     icon: <PlusCircleIcon className="w-5 h-5 mr-2" />,
        //                     actionName: "Active",
        //                     onClick: () => {
        //                         setDeleteOpen(true)
        //                         setSelectedUser({
        //                             id: row.id,
        //                             status: STATUS.ACTIVE_STATUS,
        //                         });
        //                     },
        //                 },
        //             ] : []),
        //             {
        //                 permissionKey: "Manage Articles",
        //                 actionType: "archive",
        //                 icon: <TrashIcon className="w-5 h-5 mr-2" />,
        //                 actionName: "Archive",
        //                 onClick: () => {
        //                     setDeleteOpen(true)
        //                     setSelectedUser({
        //                         id: row.id,
        //                         status: STATUS.ARCHIVE_STATUS,
        //                     });
        //                 },
        //             },
        //         ];
        //         return (
        //             <div className="flex justify-start">
        //                 <TableActions userPermissions={user?.formattedPermissions} row={row} actions={actions} />
        //             </div>
        //         );
        //     },
        // },
    ];
    const data = []
    return (
        <div>
            <DataTable columns={columns} tableData={data} apiHit={true} />
        </div>
    )
}

export default Cart