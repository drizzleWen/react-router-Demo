import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

class View extends Component {
	render(){
		return (
			<div>
				this is view~!
				返回
				<Link to='/'>首页</Link>
			</div>
			)
	}
}


export default View;