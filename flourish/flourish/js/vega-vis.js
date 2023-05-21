                        // Assign the specification to a local variable vlSpec.
                        var vlSpec = {
                            $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
                            data: {
                            values: [
                                {a: 'C', b: 2},
                                {a: 'C', b: 7},
                                {a: 'C', b: 4},
                                {a: 'D', b: 1},
                                {a: 'D', b: 2},
                                {a: 'D', b: 6},
                                {a: 'E', b: 8},
                                {a: 'E', b: 4},
                                {a: 'E', b: 7}
                            ]
                            },
                            mark: 'bar',
                            encoding: {
                            y: {field: 'a', type: 'nominal'},
                            x: {
                                aggregate: 'average',
                                field: 'b',
                                type: 'quantitative',
                                axis: {
                                title: 'Average of b'
                                }
                            }
                            }
                        };
                        var vlSpec = {
                            "data": {"url": "https://vega.github.io/vega-lite/data/seattle-weather.csv"},
                            "mark": "bar",
                            "encoding": {
                                "x": {
                                "timeUnit": "month",
                                "field": "date",
                                "type": "ordinal",
                                "title": "Month of the year"
                                },
                                "y": {
                                "aggregate": "count",
                                "type": "quantitative"
                                },
                                "color": {
                                "field": "weather",
                                "type": "nominal",
                                "scale": {
                                    "domain": ["sun", "fog", "drizzle", "rain", "snow"],
                                    "range": ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"]
                                },
                                "title": "Weather type"
                                }
                            }
                            }

                        // Embed the visualization in the container with id `vis`
                        vegaEmbed('#vis', vlSpec);