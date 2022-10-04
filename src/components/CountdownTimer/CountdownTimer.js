import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import useCountdown from '../../hooks/useCountdown';

export const CountdownTimer = () => {
// '10/05/2022 17:47' month/day/year time
  const countdown = useCountdown(new Date('07/08/2023 18:00'));
  return (
    <Box sx={{ minHeight: `calc(50vh)`, position: "relative" }}>
      <Container maxWidth="lg" sx={{
        position: "absolute", top: "50%",
        left: "50%", transform: `translate(${-50}%, ${-50}%)`,
        textAlign: "center"
      }}>
        <Typography variant='h1' sx={{ mb: "5rem" }}>8 July 2023</Typography>
        <Typography sx={{ maxWidth: "35em", margin: "0 auto" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem

        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {TimeBox(countdown.days, 'Days')}
          <Typography variant="h2">:</Typography>
          {TimeBox(countdown.hours, 'Hours')}
          <Typography variant="h2">:</Typography>
          {TimeBox(countdown.minutes, 'Minutes')}
          <Typography variant="h2">:</Typography>
          {TimeBox(countdown.seconds, 'Seconds')}
        </Box>
      </Container>
    </Box>
  )
}

function TimeBox(type, label) {
  return (
    <div>
      <Typography variant="h2">{type}</Typography>
      <Typography sx={{ color: 'text.secondary' }}>{label}</Typography>
    </div>
  );
}