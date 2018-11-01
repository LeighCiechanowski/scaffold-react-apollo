import React from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from 'antd';
import AddThingForm from '../AddThingForm';

const Thing = ({thing, loading}) => {
    if (loading) {
        return <div>LOADING</div>;
    }
  return (
    

    <div>
      <h4>
        Thing - {thing.id}
      </h4>
      <p>{thing.body}</p>
      {thing.commentsCount > 0 && 
      <p>{thing.commentsCount}</p>
    }
    <Timeline reverse={true}>
    { thing.comments.map(comment => {
        return <Timeline.Item key={comment.id}>{comment.body}</Timeline.Item>
    })}
    </Timeline>
    <AddThingForm />


      {/* {thing.comments.map(comment => {
          return <p key={comment.id}>{comment.body}</p>
      })}
      <AddThingForm /> */}
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default Thing;
