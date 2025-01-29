import  {useWeatherStore} from '../stores/wheatherStore';
import { getTemperatura } from '@/helpers/getWeather';

export const useWeather = async () => {
    const temperatura = await getTemperatura();
    const wheatherStore = useWeatherStore();
    wheatherStore.temperatura = temperatura;
};
