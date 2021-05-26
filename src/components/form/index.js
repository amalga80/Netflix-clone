import React from 'react'
import {Container, Error, Title, Input, Text, TextSmall, Link, Submit, Base} from './styles/form'

export default function Form({children,...restPros}) {
    return (
       <Container {...restPros}>{children}</Container>
    )
}

Form.Error=function FormError({children,...restPros}){
    return <Error {...restPros}>{children}</Error>
}
Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
  };
  
  Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };
  
  Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };
  
  Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
  };
  
  Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
  };
  
  Form.Input = function FormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
  };
  
  Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>;
  };