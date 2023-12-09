import StarImg from "./StarImg";

const ClientComment = ({ hideName, client }) => {
  return (
    <div className='comment-card'>
      <h4 className='commenter'>{hideName(client.user)}</h4>
      <div className='client-point'>
        <StarImg />
        <StarImg />
        <StarImg />
        <StarImg />
        <StarImg />
      </div>
      <p className='comment'>{client.message}</p>
    </div>
  );
};
export default ClientComment;
