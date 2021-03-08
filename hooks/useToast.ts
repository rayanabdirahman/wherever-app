import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { AlertModel } from '../domain/interfaces/alert';
import { State } from '../store';
import { AlertState } from '../store/interfaces';

export default function useToast(): () => void {
  const alerts = useSelector<State, AlertState>((state) => state.alert);
  const showToast = () => {
    alerts &&
      alerts.map((alert: AlertModel) => {
        return Toast.show({
          topOffset: 60,
          type: alert.type,
          text1: alert.message
        });
      });
  };
  return showToast;
}
