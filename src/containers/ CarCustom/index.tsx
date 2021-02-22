import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsTokenGenerated } from '../../store/car-custom/carCustom.selectors';
import { loadCustomCarInfo } from '../../store/car-custom/carCustom.thunks';

interface CarCustomContainerProps {}

interface StyledProps {}

const CarCustomWrap = styled.div<StyledProps>``;

const CarCustomContainer: React.FC<CarCustomContainerProps> = () => {
  const isTokenGenerated = useSelector(selectIsTokenGenerated);

  const dispatch = useDispatch();

  useEffect(() => {
    // loading state check
    !isTokenGenerated && dispatch(loadCustomCarInfo);
  }, []);

  return <CarCustomWrap></CarCustomWrap>;
};

export default CarCustomContainer;
