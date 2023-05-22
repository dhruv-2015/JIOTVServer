const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.svg","2.svg","back.svg","favicon.png","qs.css"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.0918616c.js","imports":["_app/immutable/entry/start.0918616c.js","_app/immutable/chunks/index.261bd982.js","_app/immutable/chunks/singletons.1af925a5.js","_app/immutable/chunks/index.81e6e6b3.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.48f378d2.js","imports":["_app/immutable/entry/app.48f378d2.js","_app/immutable/chunks/index.261bd982.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-c1a82480.js'),
			() => import('./chunks/1-7bef64bf.js'),
			() => import('./chunks/2-18bb7a41.js'),
			() => import('./chunks/3-a9dcb15e.js'),
			() => import('./chunks/4-d6cc76c6.js'),
			() => import('./chunks/5-498a8da5.js'),
			() => import('./chunks/6-15e3af1d.js'),
			() => import('./chunks/7-a7b06110.js'),
			() => import('./chunks/8-05867e51.js'),
			() => import('./chunks/9-1c62d0c3.js'),
			() => import('./chunks/10-76fa281f.js'),
			() => import('./chunks/11-ead6929c.js'),
			() => import('./chunks/12-8ef71d3d.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin ufbshkdjncmxzsjkdcfhbsnkd",
				pattern: /^\/admin ufbshkdjncmxzsjkdcfhbsnkd\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/catchup",
				pattern: /^\/catchup\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/catchup/play",
				pattern: /^\/catchup\/play\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/catchup/play/[id]",
				pattern: /^\/catchup\/play\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/catchup/play/[id]/[cstart]/[cend]",
				pattern: /^\/catchup\/play\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"cstart","optional":false,"rest":false,"chained":false},{"name":"cend","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/catchup/[id]",
				pattern: /^\/catchup\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/catchup/[id]/[day]",
				pattern: /^\/catchup\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"day","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/play",
				pattern: /^\/play\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/play/[id]",
				pattern: /^\/play\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
