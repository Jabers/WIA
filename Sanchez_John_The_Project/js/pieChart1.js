var pie = new d3pie("pieChart1", {
	"header": {
		"title": {
			"text": "How Do You",
			"color": "#c14b00",
			"fontSize": 50,
			"font": "verdana"
		},
		"subtitle": {
			"text": "dig deep to finish a hard effort?",
			"color": "#007ac2",
			"fontSize": 20,
			"font": "verdana"
		},
		"titleSubtitlePadding": 1
	},
	"footer": {
		"text": "Based on 2,050 respondents",
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
				"label": "Visualize myself finishing strong",
				"value": 33,
				"color": "#2484c1"
			},
			{
				"label": "Focus on 'reeling in' other runners",
				"value": 24,
				"color": "#0c6197"
			},
			{
				"label": "repeat a mantra",
				"value": 20,
				"color": "#4daa4b"
			},
			{
				"label": "Listen to music",
				"value": 19,
				"color": "#90c469"
			},
			{
				"label": "Promise myself a reward",
				"value": 4,
				"color": "#daca61"
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
			"color": "#918f8a",
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
			"x": -45,
			"y": 20
		}
	},
	"callbacks": {}
});