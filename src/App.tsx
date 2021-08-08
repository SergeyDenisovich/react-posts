// @ts-nocheck

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from './store/reducer/postsReducer';
import { fetchPosts } from './store/actions/postsActions';
import { AddPostModal } from './components/AddPost';
import { PostsList } from './components/PostsList';
import { useBoolean } from '@fluentui/react-hooks';
import { ConfirmDialog } from './components/ConfirmDialog';
import { Text } from '@fluentui/react/lib/Text';
import { PrimaryButton } from '@fluentui/react/lib/Button';

const App: React.FC = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  const [currentPostId, setCurrentPostId] = React.useState<number | null>(null);
  const dispatch = useDispatch();
  const { posts, isLoaded } = useSelector((state: IState) => state);

  React.useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmPostDelete = (id: number) => {
    setCurrentPostId(id);
    toggleHideDialog.call(null);
  };

  return (
    <div className='App-wrapper'>
      <Text block={true} variant={'large'} className='App-header'>
        Posts List
      </Text>
      {!isModalOpen && <PrimaryButton text='Add post' onClick={showModal} />}
      {isModalOpen && <AddPostModal showModal={isModalOpen} hideModal={() => hideModal()} />}
      {isLoaded && <p>Loading posts...</p>}
      {posts.length > 0 && <PostsList posts={posts} currentIDForDel={confirmPostDelete} />}
      {!posts.length && !isLoaded ? <p>No posts</p> : ''}
      {!hideDialog && (
        <ConfirmDialog hideDialog={hideDialog} toggleHideDialog={toggleHideDialog} currentPostId={currentPostId} />
      )}
    </div>
  );
};

export default App;
