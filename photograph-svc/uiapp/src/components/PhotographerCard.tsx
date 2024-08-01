// PhotographerCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 10px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #555;
  text-align: center;
`;

const Event = styled.p`
  font-size: 1em;
  color: #555;
  text-align: center;
`

const PhotographerCard = ({ firstName, lastName, avatar, description, event }) => {
  return (
    <Card>
      <Avatar src={avatar} alt={`${firstName} ${lastName}`} />
      <Name>{`${firstName} ${lastName}`}</Name>
      <Event>Event: {event}</Event>
      <Description>Location: {description}</Description>
    </Card>
  );
};

export default PhotographerCard;
