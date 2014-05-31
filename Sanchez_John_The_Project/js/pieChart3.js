var pie = new d3pie("pieChart3", {
	"header": {
		"title": {
			"text": "What Causes You",
			"color": "#c14b00",
			"fontSize": 50,
			"font": "verdana"
		},
		"subtitle": {
			"text": "anxiety before a race?",
			"color": "#007bc2",
			"fontSize": 20,
			"font": "verdana"
		},
		"titleSubtitlePadding": 3
	},
	"footer": {
		"text": "Based on 432 respondents",
		"color": "#d3d1d1",
		"fontSize": 10,
		"font": "verdana",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 690
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "Fear of a mid-race mishap",
				"value": 32,
				"color": "#44b9b0"
			},
			{
				"label": "Being undertrained",
				"value": 25,
				"color": "#7c37c0"
			},
			{
				"label": "Possibly missing my goal time",
				"value": 21,
				"color": "#cc9fb1"
			},
			{
				"label": "A bad night's sleep",
				"value": 16,
				"color": "#e65414"
			},
			{
				"label": "Poor weather forecast",
				"value": 6,
				"color": "#8b6834"
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
		},
		"pieCenterOffset": {
			"x": 15,
			"y": 20
		}
	},
	"callbacks": {}
});