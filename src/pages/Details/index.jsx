import { Container, Links, Content } from './styles';


import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import {Section} from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag'

export  function Details(){

  return(
    <Container> 

      <Header />   
    <main>
      <Content>    
      
    <ButtonText title="Excluir nota" />

      <h1>
        Introdução ao React
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quam rem, 
        vitae esse reprehenderit cum necessitatibus dolorem cumque at ut modi debitis, 
        officiis tenetur recusandae aliquam libero, repellendus iure eius?
      </p>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href='#'>https://app.rocketseat.com.br/</a>
          </li>
          <li>
            <a href='#'>https://app.rocketseat.com.br/</a>
          </li>
          
        </Links>
      </Section>

      <Section title="Marcadores"> 
      <Tag title="Express" />
      <Tag title="Node" />
      
      </Section>

        <Button title="voltar" />   

          </Content>
    </main>
   
           
    </ Container>
  )
}