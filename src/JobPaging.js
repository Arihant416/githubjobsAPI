import React from 'react';
import { Pagination } from 'react-bootstrap';
export default function JobPaging({ page, setPage, hasNextPage }) {
	function pager(amount) {
		setPage(prevPage => prevPage + amount);
	}
	return (
		<Pagination variant='dark'>
			{page !== 1 && <Pagination.Prev onClick={() => pager(-1)} />}
			{page !== 1 && (
				<Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
			)}
			{page > 2 && <Pagination.Ellipsis />}
			{page > 2 && (
				<Pagination.Item onClick={() => pager(-1)}>{page - 1}</Pagination.Item>
			)}
			<Pagination.Item active>{page}</Pagination.Item>
			{hasNextPage && (
				<Pagination.Item onClick={() => pager(1)}>{page + 1}</Pagination.Item>
			)}
			{hasNextPage && <Pagination.Next onClick={() => pager(1)} />}
		</Pagination>
	);
}
