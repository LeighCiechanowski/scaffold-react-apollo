import React from 'react';
import { Skeleton, List, Icon } from 'antd';
import 'antd/dist/antd.css';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Feed extends React.Component {
  render() {
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.props.things}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={!this.props.loading && [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
            >
              <Skeleton loading={this.props.loading} active>
                <List.Item.Meta
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.body}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Feed;
