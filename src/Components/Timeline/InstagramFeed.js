import React from 'react';

import InstagramEmbed from 'react-instagram-embed';

class InstagramFeed extends React.Component{
	render(){
		return(
			<div>
				<InstagramEmbed
					url='https://instagr.am/p/Zw9o4/'
					maxWidth={200}
					hideCaption={true}
					containerTagName='div'
					protocol=''
					injectScript
					onLoading={() => {}}
					onSuccess={() => {}}
					onAfterRender={() => {}}
					onFailure={() => {}}
				/>
			</div>
		)
	}
}

export default InstagramFeed;