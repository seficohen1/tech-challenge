import React, { useRef, useState } from 'react';
import { UploadCard, UploadInfoCard } from '../../ui';
import { Main, UploadSection, IntroductionSection } from './Upload.styled';
import { ReactComponent as UploadLogo } from '../assets/upload-icon/upload.svg';
import { InputText } from './UploadForm.styled';
import { useUploadFileMutation } from '../../features/api/apiSlice';
import { Container, Button, Loading } from '@nextui-org/react';

const UploadPage = () => {
  const [formFields, setFormFields] = useState({
    file: '',
    title: '',
    tag: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const [uploadFile] = useUploadFileMutation();

  const handleOnChange = (e) => {
    let { name, value, files } = e.target;
    files
      ? setFormFields((prevState) => ({ ...prevState, [name]: files[0] }))
      : setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { file, title, tag } = formFields;
    const data = new FormData();
    data.append('image', file);
    data.append('title', title);
    data.append('tag', tag);
    try {
      const response = await uploadFile(data).unwrap();
      if (response) {
        formRef.current.reset();
        setIsLoading(false);
        setFormFields({ file: '', title: '', tag: '' });
      }
    } catch (error) {
      console.log('error');
    }
  };
  return (
    <Main>
      <Container>
        <IntroductionSection>
          <h1>
            <span>Upload</span> your GIFS and Memes
          </h1>
          <p>
            Be uinique and special, find a way to express your thoughts and
            feelings. Just pick a GIF or a MEME and upload, then share it with
            your friends and loved ones.
          </p>
        </IntroductionSection>
        <UploadSection>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            ref={formRef}
          >
            <UploadCard>
              <div className="upload-box">
                <UploadLogo className="upload-logo" />
                <div className="upload-input">
                  <h3>What would you like to share?</h3>
                  <lable htmlFor="file"></lable>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="inputfile"
                    onChange={handleOnChange}
                    required
                  />
                </div>
              </div>
              <UploadInfoCard>
                <InputText
                  type="text"
                  name="title"
                  placeholder="Add a title to your file"
                  onChange={handleOnChange}
                  required
                />
                <InputText
                  type="text"
                  name="tag"
                  placeholder="Add a tag to your file"
                  onChange={handleOnChange}
                  required
                />
                <Button
                  disabled={isLoading && true}
                  flat
                  color="secondary"
                  autot
                  type="submit"
                >
                  Upload
                  {isLoading && (
                    <Loading type="points" color="currentColor" size="sm" />
                  )}
                </Button>
              </UploadInfoCard>
            </UploadCard>
          </form>
        </UploadSection>
      </Container>
    </Main>
  );
};

export default UploadPage;
