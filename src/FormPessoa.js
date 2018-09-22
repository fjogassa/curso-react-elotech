import React from 'react';
import { Button } from 'react-bootstrap';

// class FormPessoa extends React.Component {
//     render() {
//         return (
//             <div>
//               <div>
//                 Nome: <input name="nome" value={this.props.nome} onChange={this.props.onChange}/>
//               </div>
//               <div>
//                 Idade: <input name="idade" type="number" value={this.props.idade} onChange={this.props.onChange}/>        
//               </div>
//               <div>
//                 <button onClick={this.props.adicionarPessoa}>Adicionar</button>
//               </div>          
//             </div>
//           );    
//     }
// }

const FormPessoa = (props) => {

    return (
        <div>
            <div>
            Nome: <input name="nome" value={props.nome} onChange={props.onChange}/>
            </div>
            <div>
            Idade: <input name="idade" type="number" value={props.idade} onChange={props.onChange}/>        
            </div>
            <div>
            <Button variant="outline-primary" onClick={props.adicionarPessoa}>Adicionar</Button>
            </div>
        </div>
    );
}

export default FormPessoa;