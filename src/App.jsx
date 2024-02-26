import { useState, useEffect } from 'react';
import actionsService from './services/actions';
import './App.css';

const App = () => {
	const [excuses, setExcuses] = useState([]);
	const [isClicked, setIsCliked] = useState(false);

	useEffect(() => {
		// load excuses data
		actionsService.getRandomExcuses().then((response) => {
			setExcuses(response);
		});
	}, [isClicked]);

	return (
		<>
			<section>
				<h1
					onClick={() => {
						setIsCliked((isClicked) => !isClicked);
					}}
				>
					Developer excuses
				</h1>
			</section>
			<section>
				<section>{excuses && excuses.title}</section>
			</section>
		</>
	);
};

export default App;
