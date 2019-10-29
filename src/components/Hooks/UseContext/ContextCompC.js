import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../../../App';

function ContextCompC() {
	// USECONTEXT
	const channelColor = useContext(ChannelContext);
	const color = useContext(UserContext);

	return (
		<>
			{/* ############ OLD WAY CONTEXT API ############## */}
			<UserContext.Consumer>
				{color => {
					return (
						<ChannelContext.Consumer>
							{channel => {
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
			</UserContext.Consumer>

			{/* ##########  USECONTEXT API ########## */}
			<p>
				user context value color is <strong>{color}</strong> <br /> and <br />
				channel context value color is <strong>{channelColor}</strong>
			</p>
		</>
	);
}

export default ContextCompC;
