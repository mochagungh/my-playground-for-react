import React, { useContext } from 'react';
import { UserContext, ChannelContext, CountContext } from '../../../App';

function ContextCompC() {
	// USECONTEXT
	const channelColor = useContext(ChannelContext);
	const color = useContext(UserContext);

	const countContext = useContext(CountContext);

	return (
		<div>
			{/* ############ OLD WAY CONTEXT API ############## */}
			{/* <UserContext.Consumer>
				{color => {
					return (
						<ChannelContext.Consumer>
							{channelColor => {
								return (
									<p>
										user context value color is <strong>{color}</strong> <br />{' '}
										and <br />
										channel context value color is{' '}
										<strong>{channelColor}</strong>
									</p>
								);
							}}
						</ChannelContext.Consumer>
					);
				}}
			</UserContext.Consumer> */}

			{/* ##########  USECONTEXT API ########## */}
			{/* <p>
				user context value color is <strong>{color}</strong> <br /> and <br />
				channel context value color is <strong>{channelColor}</strong>
			</p> */}
			<p>Context Component C :</p>
			<p>count is {countContext.countState}</p>
			<button onClick={() => countContext.countDispatch('increment')}>
				increment
			</button>
			<button onClick={() => countContext.countDispatch('decrement')}>
				decrement
			</button>
			<button onClick={() => countContext.countDispatch('reset')}>reset</button>
		</div>
	);
}

export default ContextCompC;
