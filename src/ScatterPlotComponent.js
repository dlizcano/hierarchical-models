// Scatterplot
import React, { Component } from 'react';
import * as d3 from 'd3';
import './ScatterPlot.css';
import ScatterPlot from './ScatterPlot';

// Scatterplot component
class ScatterPlotComponent extends Component {
    componentDidMount() {
        // Define scatterplot function
        this.scatter = ScatterPlot();
        this.update();
    }

    // Create chart
    update() {
        // Update parameters
        this.scatter
            .width(this.props.width)
            .height(this.props.height)
            .colorScale(this.props.colorScale)
            .delay(this.props.delay)
            .xTitle(this.props.xTitle)
            .yTitle(this.props.yTitle)
            .radius(this.props.radius);

        // Call d3 update
        d3.select(this.root)
            .datum(this.props.data)
            .call(this.scatter);
    }
    // Update on new props
    componentWillReceiveProps(props) {
        this.props = props;
        this.update();
    }

    render() {
        // Expose HTML node via ref property
        return (
            <div className="chart" width={ this.props.width } height={ this.props.height } ref={ (node) => {
                                                                                         this.root = node;
                                                                                     } } />
            );
    }
}
;

ScatterPlotComponent.defaultProps = {
    width: 500,
    height: 500,
    xTitle: 'X Title',
    colorScale: (d) => 'blue',
    yTitle: 'Y Title',
    title: 'Title',
    delay: (d) => 0,
    radius: (d) => d.selected == true ? 6 : 10,
    fill: (d) => 'blue',
    data: [{
        x: 10,
        y: 1000,
        id: "a"
    }, {
        x: 10,
        y: 1000,
        id: "b"
    }, {
        x: 5,
        y: 1200,
        id: "c"
    }]
}

export default ScatterPlotComponent;
