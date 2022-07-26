import React from 'react';
import { useIntl } from 'react-intl';
import { Flex } from '../base/Utils';
import { Button } from '../Button';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle
} from './styles';

type DialogDeleteType = {
  open: boolean;
  onHide: () => void;
  onDelete: () => void;
}

const DialogDelete: React.FC<DialogDeleteType> = ({ open, onHide, onDelete }) => {
  const { formatMessage } = useIntl();
  return (
    <AlertDialog open={open} onOpenChange={onHide}>
      <AlertDialogContent >
        <AlertDialogTitle>{formatMessage({ id: 'messages.deleteDialogTitle' })}</AlertDialogTitle>
        <AlertDialogDescription>
          {formatMessage({ id: 'messages.deleteDialogContent' })}
        </AlertDialogDescription>
        <Flex css={{
          width: '100%',
          justifyContent: 'flex-end',
          gap: '$4'
        }}>
          <AlertDialogCancel asChild>
            <Button color='neutral' idLabel='label.cancel' onClick={onHide} />
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button color='danger' idLabel='label.yesDeleteRecord' onClick={onDelete} />
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DialogDelete;