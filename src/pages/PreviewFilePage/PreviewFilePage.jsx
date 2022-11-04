import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllFiles,
  selectCurrentFile,
} from '../../features/file/filesSlice';

const PreviewFilePage = () => {
  const files = useSelector(selectAllFiles);
  const currentFile = useSelector(selectCurrentFile);
  console.log(currentFile);
  return (
    <div>
      <h3>gif title</h3>
      <img
        src="https://images.generated.photos/woIHe-qdHKha5rCtX5VVAfhKcVkAq70Nfc549JOb5WA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTY2NTc5LmpwZw.jpg"
        alt="selected-gif"
      />
      <div className="uploaded-by">
        <div className="user">username</div>
      </div>
      <hr />
      <div className="share-optioms">
        <div className="facebook"></div>
        <div className="twitter"></div>
      </div>
      <hr />
      <div className="tags"></div>
    </div>
  );
};

export default PreviewFilePage;
