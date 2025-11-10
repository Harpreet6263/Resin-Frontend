import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import { Pagination } from '@heroui/react';

export default function Paginations(props) {
    const {
        currentPage,
        totalRecords,
        totalPages,
        setCurrentPage,
        limit,
        tableDataLength,
        showPagination
    } = props;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex items-center bg-[#fefaf0] justify-between pt-4">
            <div className="flex flex-1 flex-col-reverse gap-1 md:flex-row items-center justify-between">
                <div>
                    <p className="text-sm text-gray-700 relative z-10">
                        Showing <span className="font-medium">{tableDataLength != 0 ? (((currentPage - 1) * limit) + 1) : 0}</span> to <span className="font-medium">{totalRecords > (((currentPage - 1) * limit) + tableDataLength) ? (((currentPage - 1) * limit) + tableDataLength) : totalRecords}</span> of{' '}
                        <span className="font-medium">{totalRecords}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex gap-2 -space-x-px rounded-md shadow-sm relative z-10 md:hidden" aria-label="Paginations">
                        <select onChange={e => setCurrentPage(e.target.value)} value={currentPage}>
                            <option disabled>
                                Go to Page
                            </option>
                            {showPagination?.map((pageNumber, i) => (
                                <option key={i} value={pageNumber}>
                                    {pageNumber}
                                </option>
                            ))}
                        </select>
                        <div className='flex'>
                            <Link
                                href="#"
                                onClick={() => currentPage != 1 && setCurrentPage(currentPage - 1)}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 bdark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </Link>
                            <Link
                                href="#"
                                onClick={() => currentPage != totalPages && setCurrentPage(currentPage + 1)}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 bdark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </Link>
                        </div>
                    </nav>
                    <nav className="isolate hidden md:inline-flex -space-x-px rounded-md shadow-sm relative z-10" aria-label="Paginations">
                        {totalRecords > 0 && <Pagination
                            aria-label="Pagination Navigation"
                            isCompact
                            showShadow
                            showControls
                            initialPage={currentPage}
                            total={totalPages}
                            onChange={handlePageChange}
                            size="lg"
                            color="default"
                            className='text-white'
                        />}
                    </nav>
                </div>
            </div>
        </div>
    )
}