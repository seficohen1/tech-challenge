import styled from 'styled-components';

const UploadCard = styled.div`
  border: 1px solid red;
  height: 500px;
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

  .inputfile::-webkit-file-upload-button {
    visibility: hidden;
  }
  .inputfile::before {
    content: 'Select Gif';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  .inputfile:hover::before {
    border-color: black;
  }
  .inputfile:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;

const UploadInfoCard = styled.div`
  height: 150px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
  border-radius: 0.7rem;

  h3 {
    font-weight: bold;
  }
`;

export { UploadCard, UploadInfoCard };
