import React from "react";
import styled from "styled-components";

const SocialMedia = () => {
  return (
    <StyledSocialMedia>
      <div className='container'>
        <div className='flex-footer'>
          <div className='flex-left'>
            <div className='copyright'>
              <p>Copyright &copy; 2019</p>
            </div>
          </div>
          <div className='flex-right'>
            <div className='social-icons'>
              <i className='lab la-facebook-f la-2x'></i>
              <i className='lab la-twitter la-2x'></i>
              <i className='lab la-instagram la-2x'></i>
            </div>
          </div>
        </div>
      </div>
    </StyledSocialMedia>
  );
};

const StyledSocialMedia = styled.div`
  background: #fff;

  .container {
    .flex-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6rem;
      .flex-left {
        .copyright {
          p {
            font-family: Rubik;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 30px;
          }
        }
      }
      .flex-right {
        .social-icons {
          i.lab {
            margin-left: 2rem;
            display: inline-block;
            border-radius: 50%;
            color: #fff;
            padding: 0.3rem;
            background: #ed4d47;
            transition: all 0.5s ease;
            cursor: pointer;

            &:hover {
              color: #ed4d47;
              background: #333;
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }

  @media (max-width: 830px) {
    .container {
      .flex-footer {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 0.5rem;

        .flex-left,
        .flex-right {
          width: 100%;
        }

        .flex-right {
          /* display: flex;
          justify-content: center; */

          .social-icons {
            display: flex;
            justify-content: space-around;
            i.lab {
              margin: 0;
            }
          }
        }
      }
    }
  }
`;

export default SocialMedia;
