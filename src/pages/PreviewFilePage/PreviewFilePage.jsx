import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentFile } from '../../features/file/filesSlice';
import { Container, Text } from '@nextui-org/react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  PinterestShareButton,
  TumblrShareButton,
} from 'react-share';
import {
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  PinterestIcon,
  TumblrIcon,
} from 'react-share';

const PreviewFilePage = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { title, tag, fileUrl, user } = useSelector(selectCurrentFile);

  const copyToClipboard = async (text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  const handleCopyClick = () => {
    copyToClipboard(fileUrl)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        <img src={fileUrl} alt={title} />
        {user?.username && (
          <div className="uploaded-by">
            <p className="user">
              Uploaded by <span>{user?.username}</span>
            </p>
          </div>
        )}

        <hr />
        <div className="share-options">
          <FacebookShareButton
            url={fileUrl}
            hashtag={`#{${tag}}`}
            quote={`"${title}"`}
          >
            <FacebookIcon className="social-icon" size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={fileUrl}
            hashtag={`#{${tag}}`}
            quote={`"${title}"`}
          >
            <TwitterIcon className="social-icon" size={32} round />
          </TwitterShareButton>
          <RedditShareButton
            url={fileUrl}
            hashtag={`#{${tag}}`}
            quote={`"${title}"`}
          >
            <RedditIcon className="social-icon" size={32} round />
          </RedditShareButton>
          <PinterestShareButton
            url={fileUrl}
            hashtag={`#{${tag}}`}
            quote={`"${title}"`}
          >
            <PinterestIcon className="social-icon" size={32} round />
          </PinterestShareButton>
          <TumblrShareButton
            url={fileUrl}
            hashtag={`#{${tag}}`}
            quote={`"${title}"`}
          >
            <TumblrIcon className="social-icon" size={32} round />
          </TumblrShareButton>
        </div>
        <hr />
        <div className="share-url">
          <h3>Share URL</h3>
          <input
            type="text"
            readOnly
            value={fileUrl}
            onClick={handleCopyClick}
          />
          {isCopied && <p className="copied">Copied to clipboard</p>}
        </div>
      </Content>
    </Container>
  );
};

const Content = styled.main`
  height: 800px;
  h2 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  img {
    margin-bottom: 2.5rem;
  }

  .user {
    font-style: italic;
    font-weight: bold;
  }

  span {
    color: var(--secondary);
  }
  .share-options {
    display: flex;
    height: 60px;
  }
  .social-icon {
    margin: 0.3rem;
  }
  .share-url {
    margin-top: 1rem;

    h3 {
      padding-bottom: 1rem;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 0.3rem;
      opacity: 0.6;
    }

    input:hover {
      cursor: pointer;
    }

    .copied {
      color: green;
    }
  }
`;

export default PreviewFilePage;
