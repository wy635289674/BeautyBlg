import HelloWorld from '@/components/HelloWorld';
import shouye from '@/components/customer/shouye';
import mine from '@/components/customer/mine';
import login from '@/components/customer/login';
import regist from '@/components/customer/regist';
import shouye_details from '@/components/customer/shouye_details';
import woye from '@/components/customer/woye';
import chang from '@/components/customer/chang';
export default [{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld,

		children: [{
				path: '/',
				name: 'shouye',
				component: shouye,
			},
			{
				path: '/mine',
				name: 'mine',
				component: mine,

			},
			{
				path: '/shouye_details',
				name: 'shouye_details',
				component: shouye_details
			}

		]
	},
	{
		path: '/regist',
		name: 'regist',
		component: regist,
	},
	{
		path: '/login',
		name: 'login',
		component: login,
	},

	{
		path: '/woye',
		name: 'woye',
		component: woye,
	},
	{
		path: '/chang',
		name: 'chang',
		component: chang,
	},

]