import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as _ from 'lodash'

import Section from '../../components/Section'
import MjContainer from '../../models/MjModels/MjContainer'

function mapStateToProps(state, ownProps) {
    return {
        container: _.assignIn(new MjContainer(), state.Templating.container),
        sections: _.orderBy(state.Templating.sections, 'order', 'asc')
    }
}

@connect(mapStateToProps)
export class Preview extends Component {
    render() {
        const { sections, container } = this.props

        return (
            <div id={container.getIndex()} style={container.getStylePreview()}>
                {sections.map((section, keySection) => {
                    return <Section key={keySection} section={section} />
                })}
            </div>
        )
    }
}

Preview.propTypes = {
    sections: PropTypes.array
}

export default Preview
