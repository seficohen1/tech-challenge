import styled from 'styled-components';

const UploadCard = styled.div`
  border: 1px solid red;
  height: 400px;
  width: 100%;
  box-shadow: 0px -1px 69px -36px var(--secondary);
  border-radius: 0.7rem;

  .upload-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    justify-content: center;
    height: 60%;
    border: 3px dashed var(--primary);
    border-radius: 5px;
    text-align: center;
  }
  .upload-logo {
    width: 130px;
  }
`;

const UploadInfoCard = styled.div`
  height: 100px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
  border-radius: 0.7rem;
`;

export { UploadCard, UploadInfoCard };
