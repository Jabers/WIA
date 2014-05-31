var pie = new d3pie("pieChart2", {
	"header": {
		"title": {
			"text": "How Do You",
			"color": "#c14b00",
			"fontSize": 50,
			"font": "verdana"
		},
		"subtitle": {
			"text": "keep track of your training?",
			"color": "#007bc2",
			"fontSize": 20,
			"font": "verdana"
		},
		"titleSubtitlePadding": 3
	},
	"footer": {
		"text": "Based on 1,688 respondents",
		"color": "#d3d1d1",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 690
	},
	"data": {
		"content": [
			{
				"label": "Online log",
				"value": 35,
				"color": "#7e3838"
			},
			{
				"label": "I don't record my runs",
				"value": 15,
				"color": "#7c7e38"
			},
			{
				"label": "Mobile app",
				"value": 20,
				"color": "#7e6538"
			},
			{
				"label": "Written journal",
				"value": 30,
				"color": "#567e38"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"hideWhenLessThanPercentage": 3
		},
		"mainLabel": {
			"font": "verdana",
			"fontSize": 12
		},
		"percentage": {
			"color": "#ffffff",
			"font": "verdana",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#adadad",
			"font": "verdana",
			"fontSize": 11
		},
		"lines": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"background": "#ffffff"
		}
	},
	"callbacks": {}
});