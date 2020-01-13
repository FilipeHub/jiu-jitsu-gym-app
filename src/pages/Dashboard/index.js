import React from 'react';

import { Container, JjGymList, JjGym } from './styles';

export default function Dashboard() {
    const jjgyms = [
        {
            _id: "01",
            thumbnail_url: "./jjgym01.png",
            name : "Olimpo's",
        },
        {
            _id: "01",
            thumbnail_url: "./jjgym01.png",
            name : "Korpus",
        },
        {
            _id: "01",
            thumbnail_url: "./jjgym01.png",
            name : "Chute Fight",
        }
    ];

  return (
      <Container>

          <JjGymList>
            {jjgyms.map(gym => (
            <JjGym key={gym._id}>
                <header style={{ backgroundImage : `./jjgym01.png` }} />
                <strong>{gym.name}</strong>
                <span>{gym.price ? `RS${gym.price}/dia` : 'GRÁTIS'}</span>
            </JjGym>
            ))}
        </JjGymList>
      </Container>
  );
}
