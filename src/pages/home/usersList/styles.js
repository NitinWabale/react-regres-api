import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  height: 90px;
  padding: 15px 10px;
  border: 1px solid black;
  margin: -1px;
  position: relative;
  &>div{
    display: inline-block;
  }

   button,a{
    position:  absolute;
    top: 50%;
    transform: translateY(-50%);
    &.delete{
      right: 10px;
    }
    &.edit{
      right: 80px;
    }
   
  }
`;

export const AddUser = styled.div`
    button,a{
    margin-top: 20px;
    margin-bottom: 10px;
    transform: translateY(-50%);
  }
`;
export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f2f2f2;
  float: left;
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;
export const UserInfo = styled.div`
  width:calc(100% - 60px) ;
  height: 60px;
  padding: 0 20px;
  float: left;
  &>div{
    margin: 2px 0;
  }
`;
export const Text = styled.div`
  font-size: 1rem;
  color : ${props => props.color === 'firstname' ? '#999' : '#777' };
  font-weight : ${props => props.color === 'firstname' ? '100' : '700' };
`;