import React from 'react';
import { SubmitButton, UploadCard, UploadInfoCard } from '../../ui';
import { Main, UploadSection, IntroductionSection } from './Upload.styled';
import { ReactComponent as UploadLogo } from '../assets/upload-icon/upload.svg';
import UploadFromStyled, { InputText } from './UploadForm.styled';

const UploadPage = () => {
  return (
    <Main>
      <IntroductionSection>
        <h1>
          <span>Upload</span> your GIFS and memes
        </h1>
        <p>
          Be uinique and special, find a way to express your thoughts and
          feelings. Just pick a GIF or a MEME and upload, then share it with
          your friends and loved ones
        </p>
      </IntroductionSection>
      <UploadSection>
        <form>
          <UploadCard>
            <div className="upload-box">
              <UploadLogo className="upload-logo" />
              <div className="upload-input">
                <h3>Tap here to upload</h3>
                <lable className="input-custom">
                  <input type="file" />
                </lable>
              </div>
            </div>
            <UploadInfoCard>
              <h3>Add title and a tag to your file</h3>
              <InputText
                type="text"
                name="title"
                placeholder="Add a title to your file"
                required
              />
              <InputText
                type="text"
                name="title"
                placeholder="Add a tag to your file"
                required
              />
              <SubmitButton type="submit">Upload</SubmitButton>
            </UploadInfoCard>
          </UploadCard>
        </form>
      </UploadSection>
    </Main>
  );
};

export default UploadPage;
