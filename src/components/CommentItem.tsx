import { TABLE_NAME, supabase } from '@/client';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import profile from '../assets/장원영쟝.jpg';
import sort from '../assets/detail-sort.svg';
import whitesort from '../assets/detail-whitesort.svg'

type Comment = {
  id: number;
  text: string;
  video_id: string;
  created_at: string;

};


function CommentItem () {
  const images = {
    darkMode: {
      sort: whitesort,

        },
    lightMode: {
      sort: sort,
    },
  };
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const currentImages = darkMode ? images.darkMode : images.lightMode;
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [newCommentText, setNewCommentText] = useState<string>('');
  const commentInputRef = useRef<HTMLInputElement>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const { channelId } = useSelector((state: RootState) => state.channelId);
  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (commentInputRef.current) {

      const commentText = commentInputRef.current.value;
      if (commentText) {
        const { data, error } = await supabase
          .from(TABLE_NAME)
          .insert({ text: commentText, video_id: channelId })
          .select();
        if (error) {
          console.error('Error adding comment:', error);
        } else {
          setComments([data[0], ...comments]);
          commentInputRef.current.value = ''; 
        }
      }
    }
  
  };

  const handleEdit = async (id: number) => {
    if (editingCommentId === id) {
      try {
        const { error } = await supabase
          .from(TABLE_NAME)
          .update({ text: newCommentText })
          .eq('id', id);
        if (error) {
          console.error('Error editing comment:', error);
        } else {
          setComments(
            comments.map((comment) =>
              comment.id === id ? { ...comment, text: newCommentText } : comment
            )
          );
        }
      } catch (error) {
        console.error('Error editing comment:', error);
      }
      setEditingCommentId(null);
      setNewCommentText('');
    } else {
      const comment = comments.find((comment) => comment.id === id);
      if (comment) {
        setNewCommentText(comment.text);
        setEditingCommentId(id);
      }
    }
  };
  
  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from(TABLE_NAME).delete().eq('id', id);
      if (error) {
        console.error('Error deleting comment:', error);
      } else {
        setComments(comments.filter((comment) => comment.id !== id));
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
  .from(TABLE_NAME)
  .select('id, text, video_id, created_at') 
  .eq('video_id', channelId)
  .order('created_at', { ascending: false });

  
      if (error) {
        console.error('Error fetching comments:', error);
      } else {
        setComments(data);
      }
    };

  
  
    fetchComments();

    



  }, [channelId]);
  return (
    <CommentContainer>

    <CommentInfo>
                
                <CommentsCounter>댓글{comments.length}개</CommentsCounter>
                <CommentsSort>
                  <SortIcon src={currentImages.sort}></SortIcon>
                  <SortBy>분류</SortBy>
                </CommentsSort>
              </CommentInfo>
    <CommentWrapper>
                <CommentAdd>
                  <CommentFormArea>
                  <Commenter src={profile}></Commenter>
                    <CommentForm id='comment' onSubmit={handleCommentSubmit}>
                      <CommentInput
                        type="text"
                        placeholder="댓글 내용을 입력해주세요."
                        name="content"
                        required
                        ref={commentInputRef}
                      />
                    </CommentForm >
                      <CommentButton type='submit' form='comment'><CommentButtonText>답글</CommentButtonText></CommentButton>

                      
                  </CommentFormArea>
                  <CommentListWrapper>
                  {comments.map((comment) => (
                   
             
                   <CommentList key={comment.id}>
                     <CommenterBox>
               
                     <Commenter src={profile}></Commenter>       
                     {comment.id === editingCommentId ? (
                       <EditInput
                         key={comment.id}
                         type="text"
                         value={newCommentText}
                         onChange={(e) => setNewCommentText(e.target.value)}
                       />
                     ) : (
                       <CommentText key={comment.id}>{comment.text}</CommentText>
                     )}
                     </CommenterBox>
                     <CommentButtonContainer>
                       <UpdatedAt>{comment.created_at.slice(2,10)}</UpdatedAt>
                     <CommentEdit onClick={()=>handleEdit(comment.id)}><CommentButtonText>수정</CommentButtonText></CommentEdit>
                     <CommentDelete onClick={() => handleDelete(comment.id)}><CommentButtonText>삭제</CommentButtonText></CommentDelete>
                     </CommentButtonContainer>
               
                   </CommentList>
                 ))}
                  </CommentListWrapper>
                  

                </CommentAdd>
              </CommentWrapper>
            </CommentContainer>

  );

}

export default CommentItem

const CommentContainer = styled.div `

`;

const CommentInfo = styled.div `
display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  border: none;
  color: var(--darkmode-color);
  background-color: var(--darkmode-bgColor);
  gap: 50px;
  font-size: 20px;
  

`;
const CommentsCounter = styled.h1 `
  
`;


const CommentsSort = styled.button `
display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  border: none;
  color: var(--darkmode-color);
  background-color: var(--darkmode-bgColor);
  cursor: pointer;
  padding: 2px;
  border-radius: 10%;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};;
  }
`;
const SortIcon = styled.img `

`;
const SortBy = styled.p `
  
`;


const Commenter = styled.img `
  width: 24px;
  height: 24px;
  border-radius: 100%;
 
`;

const CommentWrapper = styled.div `

`;

const CommentAdd = styled.ul `

`;
const CommentFormArea = styled.div `

display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: middle;
  justify-content: space-between;
  padding-top: 15px;
  margin-bottom: 20px;
  
`;
const CommentForm = styled.form `
width: 100%;
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const CommentInput = styled.input `
width: 90%;
background-color: transparent;
border: none;
border-bottom: 1px solid;
color: var(--darkmode-color);
font-size: 18px;
margin-left: 30px;
margin-right: 30px;
padding: 5px;
&:focus {
  background-color: #a3a3a33e;
}
`;



const CommentButton = styled.button `
width: 40px;
height: 24px;
border: 0.1px solid var(--button-border-color);
border-radius: 5px;
background-color: var(--darkmode-bgColor);
&:hover {
  background-color: ${(props) => props.theme.hoverColor};


}


`;
const CommentList = styled.li `
background-color: #a3a3a33e;
margin: 5px;
margin-bottom: 20px;

border-radius: 10px;
padding: 15px;
font-size: 15px;
line-height: 20px;
`;

const CommentText = styled.p `
  /* overflow: hidden; */
  display: inline-block;
  word-wrap: normal;
  word-break: break-all;
  margin: 15px;
  color: var(--darkmode-color);
`;

const CommentButtonContainer = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: end;
gap: 8px;
`;

const CommentEdit = styled.button `
 

 border-radius: 5px;

 width: 40px;
height: 24px;
border: 0.1px solid var(--button-border-color);
border-radius: 5px;
background-color: var(--darkmode-bgColor);
&:hover {
  background-color: ${(props) => props.theme.hoverColor};


}
`;
const CommentDelete = styled.button `
border-radius: 5px;

width: 40px;
height: 24px;
border: 0.1px solid var(--button-border-color);
border-radius: 5px;
background-color: var(--darkmode-bgColor);
&:hover {
 background-color: ${(props) => props.theme.hoverColor};


}
`;

const CommentButtonText = styled.p `
  color: var(--darkmode-color);
 flex-basis: 1;
 white-space: nowrap;
`;

const CommenterBox = styled.div `
  display: flex;
  flex-direction: row;
`;

const UpdatedAt = styled.p `
  color: var(--darkmode-color);
  font-size: 10px;
`;

const EditInput = styled.input `

background-color: transparent;
border: 0.1px solid var(--button-border-color);
color: var(--darkmode-color);
width: 100%;
margin-left: 25px;
margin-right: 25px;
margin-bottom: 15px;
`;

const CommentListWrapper = styled.div `
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  margin-bottom: 15px;

  &::-webkit-scrollbar {
    width: 0.625rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--button-hover-color);
    border-radius: var(--primary-margin);
  }

  &::-webkit-scrollbar-track {
    background: rgba(4, 90, 220, 0.1);
    border-radius: var(--primary-margin);
    margin-top: 0.625rem;
  }

  @media ${(props) => props.theme.tablet} {
    height: calc(100vh - 400px);
  }
  @media ${(props) => props.theme.laptop} {
    overflow-y: visible;
    
  }

`;