import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = ()=> {
    return (
         <div className="ui container comments">
             <ApprovalCard>
                 <div>
                     <h1>Warning!!!</h1>
                     Are you sure?
                 </div>
               
             </ApprovalCard>
             <ApprovalCard>
                <CommentDetail author = "Sam" date = "Yesterday at 8:30 AM" text = "I like it very much!" avatarImage = {faker.image.avatar()}/> 
             </ApprovalCard>
             
             <ApprovalCard>
                <CommentDetail author = "Maria" date = "Monday at 16:30 PM" text = "It was realy nice to read it!" avatarImage = {faker.image.avatar()}/>  
             </ApprovalCard>

             <ApprovalCard>
                <CommentDetail  author = "Jane" date = "Wednesday at 12:15 PM" text = "Me gusta mucho!" avatarImage = {faker.image.avatar()}/>
             </ApprovalCard>
               
             <ApprovalCard>
                <CommentDetail author = "Alex" date = "Friday at 13:37 AM" text = "Very nice!" avatarImage = {faker.image.avatar()}/>
             </ApprovalCard>

             <ApprovalCard>
                <CommentDetail  author = "Remus" date = "Saturday at 22:22 AM" text = "Super article!" avatarImage = {faker.image.avatar()}/>
             </ApprovalCard>
         </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));