import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const data = new Date();
const dataFormatada = format(data, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

console.log(dataFormatad);
