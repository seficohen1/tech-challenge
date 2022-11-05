import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedFile } from '../../features/file/filesSlice';
import { Item } from '../../ui';

const GifItem = ({ id, fileUrl, tag, user, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setSelectedFile({ id, fileUrl, tag, user, title }));
    navigate('/preview');
  };

  return (
    <Item onClick={handleClick}>
      <img src={fileUrl} alt="" />
    </Item>
  );
};

export default GifItem;
