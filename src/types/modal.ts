import { type UserResponseModel } from '../../generated';

export interface IModalInfo {
  mode: 'closed' | 'add' | 'edit' | 'delete';
  user?: UserResponseModel;
}
