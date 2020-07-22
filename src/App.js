import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import './App.css';
import Job from './Job';
import JobPaging from './JobPaging';
import SearchBar from './SearchBar';
function App() {
	//eslint-disable-next-line
	const [params, setParams] = useState({});
	//eslint-disable-next-line
	const [page, setPage] = useState(1);
	const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
	function handleParamChange(e) {
		const param = e.target.name;
		const value = e.target.value;
		setPage(1);
		setParams(prevParams => {
			return { ...prevParams, [param]: value };
		});
	}
	return (
		<Container className='my-4'>
			<h1 className='mb-4'>GitHub Jobs</h1>
			<SearchBar params={params} onParamChange={handleParamChange} />
			<JobPaging page={page} setPage={setPage} hasNextPage={hasNextPage} />
			{loading && <h1>Loading...!</h1>}
			{error && <h1>Error , Try Refreshing</h1>}
			{jobs.map(job => {
				return <Job key={job.id} job={job} />;
			})}
			<JobPaging page={page} setPage={setPage} hasNextPage={hasNextPage} />
		</Container>
	);
}

export default App;
