import { Link } from 'react-router-dom';


function App() {
  return (
    <div >
      <header>
		<nav>
			<ul>
				<li>
					<Link to="home">Home</Link>
				</li>
				<li>
					<Link to="about">About</Link>
				</li>
				<li>
					<Link to="about/101">About with parameter</Link>
				</li>
				<li>
					<Link to="wqwqweeweeeqewqwe">Pag Not Found</Link>
				</li>
			</ul>
		</nav>
      </header>

	<hr/>
    </div>
  );
}

export default App;
