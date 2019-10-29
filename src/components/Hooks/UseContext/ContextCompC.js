import React from 'react';
import { UserContext, ChannelContext } from '../../../App';

function ContextCompC() {
	return (
		<>
			<UserContext.Consumer>
				{color => {
					return (
						<ChannelContext.Consumer>
							{channel => {
								return (
									<div>
										user context value color is <strong>{color}</strong> <br />{' '}
										and <br />
										channel context value color is <strong>{channel}</strong>
									</div>
								);
							}}
						</ChannelContext.Consumer>
					);
				}}
			</UserContext.Consumer>
		</>
	);
}

export default ContextCompC;
