var pie = new d3pie("pieChart", {
	"header": {
		"title": {
			"text": "How do you",
			"color": "#c14b00",
			"fontSize": 30,
			"font": "verdana"
		},
		"subtitle": {
			"text": "keep track of your running?",
			"color": "#007bc2",
			"font": "verdana"
		},
		"titleSubtitlePadding": 9
	},
	"footer": {
		"text": "From Runner's World: based on 1,688 respondents",
		"color": "#999999",
		"fontSize": 10,
		"font": "verdana",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 800
	},
	"data": {
		"content": [
			{
				"label": "Written Journal",
				"value": 30,
				"color": "#7e3838"
			},
			{
				"label": "Mobile App",
				"value": 20,
				"color": "#7e6838"
			},
			{
				"label": "I don't record my runs",
				"value": 15,
				"color": "#767e38"
			},
			{
				"label": "Online Log",
				"value": 35,
				"color": "#7e5038"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 20
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
		},
		"canvasPadding": {
			"top": 0,
			"right": 0,
			"left": 0
		},
		"pieCenterOffset": {
			"y": -5
		}
	}
});