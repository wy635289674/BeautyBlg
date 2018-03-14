import admin from '@/components/admin/admin';
import article from '@/components/admin/article';
import classify from '@/components/admin/classify';
import createArticle from '@/components/admin/createArticle';
import details from '@/components/admin/details';
import articleEdit from '@/components/admin/articleEdit';
import pinglun from '@/components/admin/pinglun';
import shezi from '@/components/admin/shezi';
import sheziren from '@/components/admin/sheziren';

export default [{
	path: '/admin',
	name: 'admin',
	component: admin,
			beforeEnter:(to,from,next)=>{
				var name=sessionStorage.getItem("name");
				if(name){
					next()
				}else{
					next({path:"/login"})
				}
			},
	children: [{
			path: '/article',
			name: 'article',
			component: article,

		},
		{
			path: '/classify',
			name: 'classify',
			component: classify,

		},
		{
			path: '/createArticle',
			name: 'createArticle',
			component: createArticle,

		},
		{
			path: '/details',
			name: 'details',
			component: details,

		},
		{
			path: '/articleEdit',
			name: 'articleEdit',
			component: articleEdit,

		},
		{
			path: '/pinglun',
			name: 'pinglun',
			component: pinglun,

		},
		{
			path: '/shezi',
			name: 'shezi',
			component: shezi,

		},
		{
			path: '/sheziren',
			name: 'sheziren',
			component: sheziren,

		}
	]
}]