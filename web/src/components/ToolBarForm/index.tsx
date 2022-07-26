import { ArrowLeftIcon, CheckIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Button } from '../Button';

import { Toolbar, ToolbarLink } from './styles';

type ToolBarType = {
  allowEdit?: boolean,
  allowDelete?: boolean,
  onSave?: () => void,
  onDelete?: () => void,
  onEdit?: () => void
}

export const ToolBarForm: React.FC<ToolBarType> = ({ allowEdit, allowDelete, onDelete, onEdit, onSave }) => {
  const { formatMessage } = useIntl();

  return (
    <Toolbar>
      <ToolbarLink to={'/'} replace>
        <ArrowLeftIcon />
        <FormattedMessage id='label.goBack' />
      </ToolbarLink>
      {allowEdit ? (
        <>
          <Button
            color='success'
            idLabel='label.save'
            iconLeft
            style={{ marginLeft: 'auto' }}
            onClick={onSave}
            aria-label={formatMessage({id: 'label.save'})}
            title={formatMessage({id: 'label.save'})}
          >
            <CheckIcon />
          </Button>
          <Button 
            color='danger' 
            onClick={onDelete}
            aria-label={formatMessage({id: 'label.delete'})}
            title={formatMessage({id: 'label.delete'})}
            disabled={!allowDelete}
          >
            <TrashIcon />
          </Button>
        </>
      ) : (
        <>
          <Button
            color='neutral'
            idLabel='label.edit'
            iconLeft
            style={{ marginLeft: 'auto' }}
            onClick={onEdit}
            aria-label={formatMessage({id: 'label.edit'})}
            title={formatMessage({id: 'label.edit'})}
          >
            <Pencil1Icon />
          </Button>
        </>
      )}

    </Toolbar>
  );
}
