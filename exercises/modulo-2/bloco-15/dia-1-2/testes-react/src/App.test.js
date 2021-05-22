// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('Verificando se existe o campo Email.', () => {
//   const { getByLabelText } = render(<App />);
//   const inputEmail = getByLabelText('Email');
//   expect(inputEmail).toBeInTheDocument();
//   expect(inputEmail.type).toBe('email');
// });

// test('Verificando se existe um botão de enviar', () => {
//   const { getByTestId } = render(<App />);
//   const btn = getByTestId('id-send');
//   expect(btn).toBeInTheDocument();
//   expect(btn.type).toBe('button');
//   expect(btn).toHaveValue('Enviar');
// });

// test('Verificando se existe dois botões', () => {
//   const { getAllByRole } = render(<App />);
//   const btn = getAllByRole('button');
//   expect(btn.length).toBe(2);
// });

/* ---------------------------------------------------- */
// modifique o import abaixo
// import { render, fireEvent } from '@testing-library/react';

// // Adicione esse teste.
// test('Verificando se o botão e o campo email estão funcionando.', () => {
//   const { getByTestId, getByLabelText } = render(<App />);

//   const EMAIL_USER = 'email@email.com';

//   const textEmail = getByTestId('id-email-user');
//   expect(textEmail).toBeInTheDocument();
//   expect(textEmail).toHaveTextContent('Valor:');

//   const btnSend = getByTestId('id-send');
//   const inputEmail = getByLabelText('Email');
//   fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
//   fireEvent.click(btnSend);
//   expect(inputEmail).toHaveValue('');
//   expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
// });


/* ------------------------------- DIA-2 ---------------------- */

// App.test.js
// import React from 'react';
// import { render } from '@testing-library/react'
// import App from './App';

// afterEach(() => jest.clearAllMocks());
// it('fetch joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, "fetch")
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });
//   const { findByText } = render(<App />);
//   await findByText('Whiteboards ... are remarkable.');
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith(
//     'https://icanhazdadjoke.com/',
//     {"headers": {"Accept": "application/json"}}
//   );
// });


/* ------------------------------- DIA-2 ---------------------- */

// import React from 'react';
// import { render } from '@testing-library/react'
// import App from './App';

// afterEach(() => jest.clearAllMocks());
// it('should fetch users', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   // global.fetch = jest.fn(()=>
//   // Promise.resolve({
//   //   json: ()=> Promise.resolve(joke)
//   // }));
//   global.fetch = jest.fn(async () => ({
//     json: async () => joke
//   }));

//   const { findByText } = render(<App />);
//   await findByText('Whiteboards ... are remarkable.');
//   expect(global.fetch).toBeCalledTimes(1);
//   expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
// });

/* ------------------------------- DIA-2 ---------------------- */

// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import App from './App';
it('alterando o valor dos campos e testando o valor guardado', () => {
  const { getByTestId } = render(<App />);
  const inputNome = getByTestId('input-nome');
  expect(inputNome).toHaveValue('');
  fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = getByTestId('input-email');
  expect(inputEmail).toHaveValue('');
  fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});
/* ------------------------------- DIA-2 ---------------------- */