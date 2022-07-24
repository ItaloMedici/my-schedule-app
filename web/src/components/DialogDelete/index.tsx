import React from 'react';
import { useIntl } from 'react-intl';
import { Button } from '../Button';

import {
  AlertDialog,
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogTitle, 
  AlertDialogTrigger, 
  Flex
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
        <AlertDialogTitle>{formatMessage({id: 'messages.deleteDialogTitle'})}</AlertDialogTitle>
        <AlertDialogDescription>
          {formatMessage({id: 'messages.deleteDialogContent'})}
        </AlertDialogDescription>
        <Flex>
          <AlertDialogCancel asChild>
            <Button color='neutral' idLabel='label.cancel' onClick={onHide} />
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button color='error' idLabel='label.yesDeleteRecord' onClick={onDelete}/>
          </AlertDialogAction>
        </Flex>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DialogDelete;