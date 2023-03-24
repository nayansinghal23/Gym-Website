import React  from 'react';
import { Box, Typography } from '@mui/material';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCart from './ExerciseCart';

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {

  const LeftArrow = () => {
  
    return (
      <Typography className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  const RightArrow = () => {

    return (
      <Typography className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
      <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">
        {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCart exercise={item} />}
      </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar;