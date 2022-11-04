import UploadFromStyled from './UploadForm.styled';
import React from 'react';

const UploadForm = () => {
  return (
    <UploadFromStyled>
      <input type="text" name="title" placeholder="Add a title to your file" />
      <input type="text" name="title" placeholder="Add a tag to your file" />
    </UploadFromStyled>
  );
};

export default UploadForm;
