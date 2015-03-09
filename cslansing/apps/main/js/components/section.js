define(['react'], function (React) {
    var Section = React.createClass({
        render: function() {
            return (
                <div className="section">
                    <div className="row section-header">
                        <h3>{this.props.header} <i className="fa fa-angle-down"></i></h3>
                    </div>
                    <div className="row section-content">
                        <p>
                            {this.props.content}
                        </p>
                    </div>
                </div>
            );
        }
    });

    return Section;
});
