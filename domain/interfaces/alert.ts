import { AlertTypeEnum } from '../enums/alert';

export interface AlertModel {
  _id?: string;
  message: string;
  type: AlertTypeEnum;
}
