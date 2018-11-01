import React from 'react';
import { Query } from 'react-apollo';

import Thing from './Thing';
import QUERY from '../../graphql/queries/thing-query';

class ThingQuery extends React.Component {
    render() {
        return (
            // <div>
            // {this.props.match.params.id}
            // </div>
            <Query query={QUERY} variables={{id: this.props.match.params.id}}>
                {({ loading, error, data }) => {
                    return <Thing loading={loading} error={error} thing={data.thing} />;
                }}
            </Query>
             
        );
    }
}

export default ThingQuery;
