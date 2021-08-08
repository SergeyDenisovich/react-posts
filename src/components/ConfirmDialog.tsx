import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { useId } from '@fluentui/react-hooks';
import { deletePost } from '../store/actions/postsActions';
import { useDispatch } from 'react-redux';

const dialogStyles = { main: { maxWidth: 450 } };

const dialogContentProps = {
  type: DialogType.normal,
  title: 'Delete current post?',
  closeButtonAriaLabel: 'Close',
  subText: 'If you want to delete post click Delete or Cancel this action',
};

type ConfirmDialogProps = {
  hideDialog: boolean;
  toggleHideDialog: () => void;
  currentPostId: number;
};

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ hideDialog, toggleHideDialog, currentPostId }) => {
  const labelId: string = useId('dialogLabel');
  const subTextId: string = useId('subTextLabel');
  const dispatch = useDispatch();

  const modalProps = React.useMemo(
    () => ({
      titleAriaId: labelId,
      subtitleAriaId: subTextId,
      isBlocking: false,
      styles: dialogStyles,
    }),
    [labelId, subTextId]
  );

  const deleteCurrentPost = () => {
    dispatch(deletePost(currentPostId));
    toggleHideDialog.call(null);
  };

  return (
    <>
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modalProps}
      >
        <DialogFooter>
          <PrimaryButton onClick={deleteCurrentPost} text='Delete post' />
          <DefaultButton onClick={toggleHideDialog} text='Cancel' />
        </DialogFooter>
      </Dialog>
    </>
  );
};
