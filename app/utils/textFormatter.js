// import 'react-native-get-random-values';
import numbro from 'numbro';
// import { _naira } from '../api';

export function _currency(c) {
  return numbro(+c).format({
    // currencySymbol: _naira,
    thousandSeparated: true,
  });
}
