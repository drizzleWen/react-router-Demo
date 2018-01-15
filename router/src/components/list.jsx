import React ,{Component} from 'react';

import {Link} from 'react-router-dom';

class List extends Component {
	render(){
		return (
			<div>
				this is list~!
				将去
				<Link to='/view'>视频页</Link>
			</div>
			)
	}
}


export default List;