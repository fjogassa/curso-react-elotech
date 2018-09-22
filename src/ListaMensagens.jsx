import React from 'react';

const renderMensagem = (mensagem) => (
    <div>
        {`Mensagem: ${mensagem}`}
    </div>

)

const ListaMensagens = (props) => (
    <div>
        {props.mensagens.map(renderMensagem)}
    </div>
)

export default ListaMensagens;