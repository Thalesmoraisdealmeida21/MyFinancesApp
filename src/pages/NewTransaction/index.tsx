import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../../components/Header';
import { CardContainer, Container } from './style';
import formatValue from '../../utils/formatValue';

import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import api from '../../services/api';

interface Transaction {
  type: string;
  value: number;
  category: string;
  title: string;
}

const NewTransaction: React.FC = () => {
  const [typeTransaction, setTypeTransaction] = useState('income');
  const [transaction, setTransaction] = useState<Transaction>({
    type: 'income',
  } as Transaction);

  const history = useHistory();

  function changeInputValueColor(evt: ChangeEvent<HTMLSelectElement>): void {
    if (typeTransaction === 'income') {
      setTypeTransaction('outcome');
    } else {
      setTypeTransaction('income');
    }

    setTransaction({ ...transaction, type: evt.target.value });
  }

  async function saveTransaction(evt: FormEvent): Promise<void> {
    evt.preventDefault();

    const response = await api.post('transactions', transaction);

    if (response.data) {
      toast('Conta cadastrada com sucesso');
      history.push('/');
    } else {
      toast('Não foi possivel criar o registro');
    }
  }

  return (
    <>
      <Header />
      <Container />
      <CardContainer>
        <form onSubmit={saveTransaction}>
          <input
            value={transaction.title}
            name="desc"
            onChange={evt => {
              setTransaction({ ...transaction, title: evt.target.value });
            }}
            type="text"
            placeholder="Descrição"
          />

          <div className="groupForm">
            <select
              className="select"
              placeholder="Selecione o tipo Entrada ou sáida"
              onChange={changeInputValueColor}
            >
              <option selected value="income">
                Entrada
              </option>
              <option value="outcome">Saída</option>
            </select>
            <input
              onChange={evt => {
                setTransaction({ ...transaction, category: evt.target.value });
              }}
              type="text"
              name="Category"
              placeholder="Categoria"
            />
          </div>

          <input
            type="number"
            className={`valueInput ${typeTransaction}`}
            name="value"
            value={transaction.value}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => {
              setTransaction({
                ...transaction,
                value: Number(evt.target.value),
              });
            }}
            placeholder="Valor"
          />

          <div className="buttonGroup">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </CardContainer>
    </>
  );
};

export default NewTransaction;
