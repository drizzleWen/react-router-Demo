import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
	render(){
		return (
			<div>
				this is home~!
				将去
				<Link to='/list'>列表页</Link>
				<div>
					就开始多久啊
					<div>
						考虑到卡了
					</div>
				</div>
			</div>
			)
	}
}


export default Home;