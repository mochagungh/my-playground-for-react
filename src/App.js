import React from 'react';
import ContextCompA from './components/Hooks/UseContext/ContextCompA';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
	return (
		<>
			<UserContext.Provider value={'green'}>
				<ChannelContext.Provider value={'purple'}>
					<ContextCompA />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</>
	);
}

export default App;
