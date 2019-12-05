import React from "preact/compat";
import Mordelon from "mordelon-js";

export default class Source extends React.Component {

    constructor(props) {
        super(props);
        this.source = new Mordelon.Source({ handleDataChange: this.forceUpdate.bind(this), proxy: props.proxy, ...props });
    }

    setSourceProps() {
        Object.keys(this.props).forEach((key) => {
            if (this.source.hasOwnProperty(`_${key}`)) {
                this.source[key] = this.props[key];
            }
        });
    }

    render() {
        this.setSourceProps();
        return (this.props.render && this.props.render(this.source.data));
    }
}
