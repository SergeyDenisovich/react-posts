// @ts-nocheck
import * as React from 'react';
import { mergeStyleSets, Modal } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from './store/reducer/postsReducer';
import { addPostToState } from './store/actions/postsActions';

interface AddPostProps {
  showModal: boolean;
  hideModal: () => void;
}

export const AddPostModal: React.FC<AddPostProps> = ({ showModal, hideModal }): React.ReactElement => {
  const posts = useSelector((state: IState) => state.posts);
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const addPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (title?.trim() !== '' && description?.trim() !== '') {
      const newPostId = posts.length === 0 ? 1 : posts[posts.length - 1].id + 1;
      const newPost = { id: newPostId, title, body: description };
      dispatch(addPostToState(newPost));

      hideModal.call(null);
      setTitle('');
      setDescription('');
    }
  };

  const handleChangeTitle = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newTitleText: string
  ): void => {
    setTitle(newTitleText);
  };

  const handleChangeDescription = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newTextAreaText: string
  ) => {
    setDescription(newTextAreaText);
  };

  return (
    <div>
      <Modal isOpen={showModal} onDismiss={hideModal} containerClassName={contentStyles.container}>
        <div className={contentStyles.header}>
          <h2>New Post</h2>
        </div>
        <form onSubmit={addPost}>
          <div className={contentStyles.body}>
            <TextField label='Post title: ' value={title} onChange={handleChangeTitle} required />
            <TextField
              label='Post description:'
              value={description}
              onChange={handleChangeDescription}
              multiline
              rows={3}
              required
            />
          </div>
          <div className={contentStyles.footer}>
            <DefaultButton onClick={hideModal} text='Cancel' />
            <PrimaryButton text='Add Post' type='submit' />
          </div>
        </form>
      </Modal>
    </div>
  );
};

const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '20px',
    borderRadius: '10px',
  },
  header: {
    flex: '0 1 auto',
    color: '#000',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  body: {
    flex: '0 1 auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: '10px 0',
    selectors: {
      p: { margin: '10px 0', fontWeight: 'bold' },
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0',
  },
});
